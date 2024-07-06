<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Job</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-segment v-model="mainSegmentValue" color="dark">
          <ion-segment-button value="findJob">
            <ion-label>Find Job</ion-label>
          </ion-segment-button>
          <ion-segment-button value="findWorker">
            <ion-label>Find Worker</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
      <div class="ion-padding">
        <ion-segment v-model="subSegmentValue" color="dark">
          <ion-segment-button value="active">
            <ion-label>Active</ion-label>
          </ion-segment-button>
          <ion-segment-button value="all">
            <ion-label>All</ion-label>
          </ion-segment-button>
          <ion-segment-button value="saved">
            <ion-label>Saved</ion-label>
          </ion-segment-button>
        </ion-segment>
      </div>
    </ion-header>
    <ion-content class="ion-padding-start ion-padding-end">
      <ion-grid class="ion-no-padding">
          <ion-card v-for="item in mainSegmentValue === 'findJob' ? filterJobList : filterWorkerList" :key="item.id">
            <ion-icon style="float: right; margin: 1rem" :icon="star" size="large"></ion-icon>
            <ion-card-header>
              <ion-card-title>{{ item.title }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-card-subtitle>{{ item.title }}</ion-card-subtitle>
              {{ item.description }}
            </ion-card-content>
          </ion-card>
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
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonGrid,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
} from '@ionic/vue';
import {ref} from "vue";
import {star} from "ionicons/icons";

const jobList = [
  {
    id: 1,
    title: 'Job 1',
    description: 'Job 1 description'
  },
  {
    id: 2,
    title: 'Job 2',
    description: 'Job 2 description'
  },
  {
    id: 3,
    title: 'Job 3',
    description: 'Job 3 description'
  },
  {
    id: 4,
    title: 'Job 4',
    description: 'Job 4 description'
  },
  {
    id: 5,
    title: 'Job 5',
    description: 'Job 5 description'
  },
  {
    id: 6,
    title: 'Job 6',
    description: 'Job 6 description'
  },
  {
    id: 7,
    title: 'Job 7',
    description: 'Job 7 description'
  },
  {
    id: 8,
    title: 'Job 8',
    description: 'Job 8 description'
  }
];
const workerList = [
  {
    id: 1,
    title: 'Worker 1',
    description: 'Worker 1 description'
  },
  {
    id: 2,
    title: 'Worker 2',
    description: 'Worker 2 description'
  },
  {
    id: 3,
    title: 'Worker 3',
    description: 'Worker 3 description'
  },
];
const filterJobList = ref(jobList);
const filterWorkerList = ref(workerList);
const mainSegmentValue = ref('findJob');
const subSegmentValue = ref('active');

</script>

<style scoped>
</style>
