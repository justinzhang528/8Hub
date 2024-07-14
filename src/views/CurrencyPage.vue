<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Currency</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-segment v-model="segmentValue" color="dark">
          <ion-segment-button value="rate">
            <ion-label>Rate</ion-label>
          </ion-segment-button>
          <ion-segment-button value="converter">
            <ion-label>Converter</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <template v-if="segmentValue === 'rate'">
        <div class="ion-padding-bottom" v-for="currency in currencies">
          <ion-card class="center full-width" v-if="currency.name !== 'USD'">
            <ion-item lines="none" style="padding-top: 1rem">
              <ion-col size="auto">
                <span class="fi fi-us" style="font-size: xx-large"></span>
                <ion-label class="center">USD</ion-label>
              </ion-col>
              <ion-col size="auto">
                <span :class="currency.flag" style="font-size: xx-large"></span>
                <ion-label class="center">{{ currency.name }}</ion-label>
              </ion-col>
            </ion-item>
            <ion-card-content class="ion-no-padding ion-padding-start ion-padding-end">
              <ion-grid>
                <ion-row>
                  <ion-col>
                    <ion-label class="ion-float-left" color="dark">$ 1</ion-label>
                  </ion-col>
                  <ion-col>
                    <ion-icon color="dark" :icon="arrowForward"></ion-icon>
                  </ion-col>
                  <ion-col>
                    <ion-label class="ion-float-end" color="dark">{{
                        currency.exchangeRate.toLocaleString()
                      }}
                    </ion-label>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>
        </div>
      </template>
      <template v-else>
        <div class="ion-padding">
          <ion-card class="center full-width">
            <ion-card-content>
              <ion-text><h2>Amount</h2></ion-text>
              <ion-grid>
                <ion-row>
                  <ion-col class="center">
                    <ion-item lines="none">
                      <span :class="getCurrencyFlag(selectedMainCurrency)" style="font-size: xx-large"></span>
                      <ion-select class="ion-padding" interface="popover" v-model="selectedMainCurrency">
                        <div v-for="currency in currencies">
                          <ion-select-option :value="currency.name">{{ currency.name }}</ion-select-option>
                        </div>
                      </ion-select>
                    </ion-item>
                  </ion-col>
                  <ion-col class="center">
                    <ion-input type="number" v-model="mainExchangeRateInput" @ionInput ="onMainExchangeRateInputChange" fill="solid"></ion-input>
                  </ion-col>
                </ion-row>
              </ion-grid>
              <div class="ion-padding-bottom">
                <ion-button color="dark" shape="round" @click="invertCurrency">
                  <ion-icon slot="icon-only" :icon="swapVertical"></ion-icon>
                </ion-button>
              </div>
              <ion-text><h2>Converted Amount</h2></ion-text>
              <ion-grid>
                <ion-row>
                  <ion-col class="center">
                    <ion-item lines="none">
                      <span :class="getCurrencyFlag(selectedSubCurrency)" style="font-size: xx-large"></span>
                      <ion-select class="ion-padding" interface="popover" v-model="selectedSubCurrency">
                        <div v-for="currency in currencies">
                          <ion-select-option :value="currency.name">{{ currency.name }}</ion-select-option>
                        </div>
                      </ion-select>
                    </ion-item>
                  </ion-col>
                  <ion-col class="center">
                    <ion-input type="number" v-model="subExchangeRateInput" @ionInput="onSubExchangeRateInputChange" fill="solid"></ion-input>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>
        </div>
        <div class="ion-padding-bottom ion-padding-start ion-padding-end">
          <ion-text color="danger">
            <h5>Indicative Exchange Rate</h5>
          </ion-text>
          <ion-text>
            <p> 1 {{ selectedMainCurrency }} = {{ getIndicativeExchangeRate().toFixed(4).toLocaleString() }}
              {{ selectedSubCurrency }}</p>
          </ion-text>
        </div>
      </template>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonItem,
  IonIcon,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonButton
} from '@ionic/vue';
import {ref, watch} from "vue";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import {arrowForward, swapVertical} from "ionicons/icons";

const segmentValue = ref('rate');
const currencies = [
  {name: 'USD', flag: 'fi fi-us', exchangeRate: 1},
  {name: 'MMK', flag: 'fi fi-mm', exchangeRate: 4560},
  {name: 'TWD', flag: 'fi fi-tw', exchangeRate: 32.3},
  {name: 'THB', flag: 'fi fi-th', exchangeRate: 34.8},
  {name: 'JPY', flag: 'fi fi-jp', exchangeRate: 160.74},
  {name: 'SGD', flag: 'fi fi-sg', exchangeRate: 1.35},
];
const selectedMainCurrency = ref('USD');
const selectedSubCurrency = ref('MMK');
const mainExchangeRateInput = ref(1);
const subExchangeRateInput = ref(currencies[1].exchangeRate);
const getCurrencyFlag = (currency: string) => {
  return currencies.find(c => c.name === currency)?.flag;
}
const getCurrencyExchangeRate = (currency: string) => {
  return currencies.find(c => c.name === currency)?.exchangeRate;
}
const onMainCurrencyChange = (newCurrency: string, newInputVal: number) => {
  const mainExchangeRate = getCurrencyExchangeRate(newCurrency);
  const subExchangeRate = getCurrencyExchangeRate(selectedSubCurrency.value);
  subExchangeRateInput.value = Number((subExchangeRate * newInputVal / mainExchangeRate).toFixed(2));
}
const onSubCurrencyChange = (newCurrency: string, newInputVal: number) => {
  const mainExchangeRate = getCurrencyExchangeRate(selectedMainCurrency.value);
  const subExchangeRate = getCurrencyExchangeRate(newCurrency);
  mainExchangeRateInput.value = Number((mainExchangeRate * newInputVal / subExchangeRate).toFixed(2));
}
const onMainExchangeRateInputChange = () => {
  onMainCurrencyChange(selectedMainCurrency.value, mainExchangeRateInput.value);
}
const onSubExchangeRateInputChange = () => {
  onSubCurrencyChange(selectedSubCurrency.value, subExchangeRateInput.value);
}
const invertCurrency = () => {
  const temp = selectedMainCurrency.value;
  selectedMainCurrency.value = selectedSubCurrency.value;
  selectedSubCurrency.value = temp;
  const tempInput = mainExchangeRateInput.value;
  mainExchangeRateInput.value = subExchangeRateInput.value;
  subExchangeRateInput.value = tempInput;
}
const getIndicativeExchangeRate = () => {
  return getCurrencyExchangeRate(selectedSubCurrency.value) / getCurrencyExchangeRate(selectedMainCurrency.value);
}
watch(selectedMainCurrency, (newValue) => {
  onMainCurrencyChange(newValue, mainExchangeRateInput.value);
});

watch(selectedSubCurrency, (newValue) => {
  onSubCurrencyChange(newValue, subExchangeRateInput.value);
});
</script>

<style scoped>
ion-item {
  --background: transparent;
}
</style>
