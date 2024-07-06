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

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonSegment, IonSegmentButton} from '@ionic/vue';
import {ref} from "vue";

const segmentValue = ref('rate');
</script>
