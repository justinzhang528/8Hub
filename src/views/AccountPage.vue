<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Account</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding center">
      <ion-button v-if="!email" @click="signInWithGoogle" color="dark">
        <ion-icon :icon="logoGoogle" size="large"></ion-icon>
        <span class="ion-padding-start">Sign in with Google</span>
      </ion-button>
      <div class="ion-padding">{{ email }}</div>
      <ion-button v-if="email" @click="logout" color="dark">Logout</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, modalController } from '@ionic/vue';
import {GoogleAuth} from "@codetrix-studio/capacitor-google-auth";
import {onMounted, ref} from "vue";
import useFirebase from "@/hooks/useFirebase";
import {logoGoogle} from "ionicons/icons";
import RegisterModal from "@/views/Modal/RegisterModal.vue";
import {showLoading} from "@/hooks/useUtils";

const {getUser} = useFirebase();
const email = ref(localStorage.getItem('loginEmail'));

const signInWithGoogle = async () => {
  const response = await GoogleAuth.signIn();
  if(response.email){
    getUser(response.email.replace('.','')).then((res) => {
      if(res.data){
        showLoading('Please Wait...',()=>{
          email.value = response.email;
          localStorage.setItem('loginEmail', response.email);
        }, 750);
      }else{
        openRegisterModal(response.email);
      }
    });
  }
};

const logout = () => {
  GoogleAuth.signOut();
  localStorage.removeItem('loginEmail');
  email.value = '';
}

const openRegisterModal = async (registerEmail: string) => {
  const modal = await modalController.create({
    component: RegisterModal,
    componentProps: {
      'registerEmail': registerEmail
    }
  });

  modal.present();

  const { data, role } = await modal.onWillDismiss();

  if (role === 'confirm') {
    email.value = data;
  }
};


onMounted(() => {
  GoogleAuth.initialize();
});

</script>
