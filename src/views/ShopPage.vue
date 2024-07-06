<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Shop</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-segment v-model="segmentValue" color="dark">
          <ion-segment-button value="shop">
            <ion-label>Shop</ion-label>
          </ion-segment-button>
          <ion-segment-button value="service">
            <ion-label>Service</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
      <ion-searchbar class="ion-padding" animated="true" @ionInput="onSearchChange"></ion-searchbar>
    </ion-header>
    <ion-content class="ion-padding-start ion-padding-end">
      <ion-grid class="ion-no-padding">
        <ion-row>
          <ion-col size="6" v-for="item in segmentValue === 'shop' ? filterShopList : filterServiceList" :key="item.id">
            <ion-card>
              <ion-card-header>
                <ion-card-title>{{ item.title }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                {{ item.description }}
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

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
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/vue';
import {ref} from "vue";

const shopList = [
  {
    id: 1,
    title: 'Shop 1',
    description: 'Shop 1 description'
  },
  {
    id: 2,
    title: 'Shop 2',
    description: 'Shop 2 description'
  },
  {
    id: 3,
    title: 'Shop 3',
    description: 'Shop 3 description'
  },
  {
    id: 4,
    title: 'Shop 4',
    description: 'Shop 4 description'
  },
  {
    id: 5,
    title: 'Shop 5',
    description: 'Shop 5 description'
  },
  {
    id: 6,
    title: 'Shop 6',
    description: 'Shop 6 description'
  },
  {
    id: 7,
    title: 'Shop 7',
    description: 'Shop 7 description'
  },
  {
    id: 8,
    title: 'Shop 8',
    description: 'Shop 8 description'
  }
];
const serviceList = [
  {
    id: 1,
    title: 'Service 1',
    description: 'Service 1 description'
  },
  {
    id: 2,
    title: 'Service 2',
    description: 'Service 2 description'
  },
  {
    id: 3,
    title: 'Service 3',
    description: 'Service 3 description'
  },
];
const filterShopList = ref(shopList);
const filterServiceList = ref(serviceList);
const segmentValue = ref('shop');
const onSearchChange = (event: CustomEvent) => {
  const query = event.target.value.toLowerCase();
  filterShopList.value = shopList.filter((d) => d.title.toLowerCase().indexOf(query) > -1);
  filterServiceList.value = serviceList.filter((d) => d.title.toLowerCase().indexOf(query) > -1);
}

</script>

<style scoped>
</style>
