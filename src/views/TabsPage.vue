<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon aria-hidden="true" :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="shop" href="/tabs/shop">
          <ion-icon aria-hidden="true" :icon="storefront" />
          <ion-label>Shop</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="job" href="/tabs/job">
          <ion-icon aria-hidden="true" :icon="briefcase" />
          <ion-label>Job</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="currency" href="/tabs/currency">
          <ion-icon aria-hidden="true" :icon="logoBitcoin" />
          <ion-label>Currency</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="account" href="/tabs/account">
          <ion-icon aria-hidden="true" :icon="person" />
          <ion-label>Account</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import {briefcase, home, logoBitcoin, person, storefront} from 'ionicons/icons';
</script>

<style scoped>
ion-tab-button {
  --color: #919191;
  --color-selected: #000000;
  --color-focused: #0f0f0f;
}

@media (prefers-color-scheme: dark) {
  ion-tab-button {
    --color: #919191;
    --color-selected: #ffffff;
    --color-focused: #ededed;
  }
}
</style>
