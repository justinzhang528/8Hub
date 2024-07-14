<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Account</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button @click="signInWithGoogle">Google</ion-button>
      {{ signInInfo }}
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import {GoogleAuth} from "@codetrix-studio/capacitor-google-auth";
import {onMounted, ref} from "vue";

const signInInfo = ref('');

const signInWithGoogle = async () => {
  const response = await GoogleAuth.signIn();
  signInInfo.value = JSON.stringify(response);
};

onMounted(() => {
  GoogleAuth.initialize();
});
</script>
