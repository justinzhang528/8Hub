<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-grid>
        <ion-row class="ion-padding-bottom">
          <ion-avatar>
            <img alt="avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
          </ion-avatar>
        </ion-row>
        <ion-row class="ion-padding-bottom">
          <h1 class="center bold">Popular Now</h1>
        </ion-row>
        <ion-row class="ion-padding-bottom">
          <ion-card class="center full-width" @click="setModalOpen(true)">
            <ion-item lines="none">
              <ion-col size="auto">
                <ion-avatar>
                  <img alt="avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
                </ion-avatar>
              </ion-col>
              <ion-col>
                <ion-label class="ion-padding-start">By Author</ion-label>
                <ion-label class="ion-padding-start">January 23, 2024</ion-label>
              </ion-col>
              <ion-icon slot="end" :icon="heartCircle"></ion-icon>
            </ion-item>
            <ion-card-header>
              <ion-card-title class="ion-align-self-center">Beautiful House in Taiwan</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p>Price: $1,000,000</p>
            </ion-card-content>
          </ion-card>
        </ion-row>
        <ion-row class="ion-padding-bottom">
          <h1 class="center bold">Recommend</h1>
        </ion-row>
        <ion-row class="ion-padding-bottom" @click="navigate('shop')">
          <swiper :slides-per-view="3" :autoplay="true" :keyboard="true" :pagination="true" :scrollbar="true"
                  :zoom="true">
            <swiper-slide v-for="n in 8">
              <span>
                {{ n }}
                <img alt="avatar" class="ion-padding-start"
                     src="https://docs-demo.ionic.io/assets/madison.jpg"/>
              </span>
            </swiper-slide>
          </swiper>
        </ion-row>
        <ion-row class="ion-padding-bottom">
          <ion-card class="center full-width" @click="navigate('job')">
            <ion-card-header>
              <ion-card-title>Find your part-time job</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-searchbar disabled></ion-searchbar>
            </ion-card-content>
          </ion-card>
        </ion-row>
        <ion-row class="ion-padding-bottom">
          <ion-card class="center full-width" @click="navigate('currency')">
            <ion-item lines="none" style="padding-top: 1rem">
              <ion-col size="auto">
                <span class="fi fi-us" style="font-size: xx-large"></span>
                <ion-label class="center">USD</ion-label>
              </ion-col>
              <ion-col size="auto">
                <span class="fi fi-mm" style="font-size: xx-large"></span>
                <ion-label class="center">MMK</ion-label>
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
                    <ion-label class="ion-float-end" color="dark">4,000MMK</ion-label>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>
        </ion-row>
      </ion-grid>

      <ion-modal :is-open="isModalOpen" :enter-animation="enterAnimation" :leave-animation="leaveAnimation">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button @click="setModalOpen(false)">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-fab slot="fixed" vertical="top" horizontal="end">
            <ion-fab-button color="dark">
              <ion-icon :icon="heart"></ion-icon>
            </ion-fab-button>
          </ion-fab>
          <ion-grid>
            <ion-row class="ion-padding-bottom image-container">
              <img alt="avatar" class="center"
                   src="https://docs-demo.ionic.io/assets/madison.jpg"/>
            </ion-row>
            <ion-row class="ion-padding-bottom">
              <h1 class="center">Beautiful House in Taiwan</h1>
            </ion-row>
            <ion-row>
              <ion-col size="auto">
                <ion-avatar>
                  <img alt="avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
                </ion-avatar>
              </ion-col>
              <ion-col>
                <ion-label class="ion-padding-start">By Author</ion-label><br>
                <ion-label class="ion-padding-start">January 23, 2024</ion-label>
              </ion-col>
            </ion-row>
            <ion-row>
              <p class="ion-padding">Taiwan is home to many beautiful houses that blend traditional and modern architectural styles. Nestled in lush, green landscapes, these homes often feature elegant wooden structures, intricate carvings, and large windows that invite natural light. The unique fusion of Taiwanese culture and contemporary design creates a harmonious living space that is both aesthetically pleasing and functional. Many houses in Taiwan are designed to maximize space and incorporate elements of Feng Shui, ensuring a balanced and tranquil environment. Whether located in bustling urban areas or serene countryside settings, the beautiful houses in Taiwan reflect the island's rich heritage and innovative spirit.</p>
            </ion-row>
          </ion-grid>
        </ion-content>
      </ion-modal>
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
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonLabel,
  IonItem,
  IonIcon,
  IonSearchbar,
  IonModal,
  IonButtons,
  IonButton,
  IonFab,
  IonFabButton
} from '@ionic/vue';
import {arrowForward, heart, heartCircle} from "ionicons/icons";
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useIonRouter, createAnimation } from '@ionic/vue';
import {ref} from "vue";

const isModalOpen = ref(false);

const setModalOpen = (isOpen: boolean) => {
  isModalOpen.value = isOpen;
};

const enterAnimation = (baseEl: HTMLElement) => {
  const root = baseEl.shadowRoot;

  const backdropAnimation = createAnimation()
      .addElement(root.querySelector('ion-backdrop'))
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

  const wrapperAnimation = createAnimation()
      .addElement(root.querySelector('.modal-wrapper'))
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

  return createAnimation()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(200)
      .addAnimation([backdropAnimation, wrapperAnimation]);
};

const leaveAnimation = (baseEl) => {
  return enterAnimation(baseEl).direction('reverse');
};

const router = useIonRouter();
const navigate = (location: string) => router.navigate(location, 'forward', 'replace');
</script>

<style scoped>
ion-item {
  --background: transparent;
}
</style>
