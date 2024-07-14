<template>
  <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonButton @click="onCancelRegisterModal()">Cancel</IonButton>
      </IonButtons>
      <IonTitle class="center">Register</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent class="center ion-padding">
    <IonItem>
      <IonInput :label="'Username'" label-placement="stacked" v-model="registerUserNameInput" type="text" maxlength="15" :placeholder="'EnterUserName'" :clear-input="true">
        <IonIcon :icon="person" aria-hidden="true" slot="start"></IonIcon>
      </IonInput>
    </IonItem>
    <IonItem>
      <IonInput :label="'Password'" label-placement="stacked" v-model="registerPasswordInput" type="password" maxlength="15" :placeholder="'EnterPassword'" :clear-input="true">
        <IonIcon :icon="lockClosed" aria-hidden="true" slot="start"></IonIcon>
        <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
      </IonInput>
    </IonItem>
    <IonItem>
      <IonInput :label="'ConfirmPassword'" label-placement="stacked" v-model="registerConfirmPasswordInput" type="password" maxlength="15" :placeholder="'EnterPasswordAgain'" :clear-input="true">
        <IonIcon :icon="lockClosed" aria-hidden="true" slot="start"></IonIcon>
        <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
      </IonInput>
    </IonItem>
    <IonItem>
      <IonInput :label="'Email'" label-placement="stacked" v-model="registerEmailInput" type="text" :placeholder="'EnterEmail'" readonly>
        <IonIcon :icon="mail" aria-hidden="true" slot="start"></IonIcon>
      </IonInput>
    </IonItem><br>
    <IonButton @click="onConfirmRegisterModal()" shape="round" color="dark">{{ 'Register' }}</IonButton>
  </IonContent>
</template>

<script setup lang="ts">

import {lockClosed, mail, person} from "ionicons/icons";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonItem,
  IonTitle,
  IonToolbar,
  modalController,
} from "@ionic/vue";
import {showAlert, showLoading} from "@/hooks/useUtils";
import {dataResponse} from "@/enum/enum";
import {onMounted, ref} from "vue";
import useFirebase from "@/hooks/useFirebase";

const {upSertUser} = useFirebase();
const registerUserNameInput = ref();
const registerPasswordInput = ref();
const registerConfirmPasswordInput = ref();
const registerEmailInput = ref();

const props = defineProps({
  registerEmail: {
    type: String,
    required: true
  }
});

const onCancelRegisterModal = ()=>{
  modalController.dismiss(null, 'cancel')
}

const onConfirmRegisterModal = ()=>{
  const registerUsername = registerUserNameInput.value;
  const registerPassword = registerPasswordInput.value;
  const registerConfirmPassword = registerConfirmPasswordInput.value;
  const registerEmail = registerEmailInput.value;

  console.log(registerUsername)

  if(!registerUsername){
    showAlert('warning', '', 'pleaseInputUsername', 'ok');
    return;
  }
  if(!registerPassword){
    showAlert('warning', '', 'pleaseInputPassword', 'ok');
    return;
  }
  if(!registerConfirmPassword){
    showAlert('warning', '', 'pleaseInputConfirmPassword', 'ok');
    return;
  }
  if(registerPassword !== registerConfirmPassword){
    showAlert('warning', '', 'passwordNotMatch', 'ok');
    return;
  }

  // insert new user
  upSertUser(registerUsername,registerPassword,registerEmail).then((res)=>{
    if(res.errorCode === dataResponse.SUCCESS){
      const data = {
        name: registerUsername,
        password: registerPassword,
        email: registerEmail,
      }
      localStorage.setItem('loginEmail',JSON.stringify(data));
      showLoading('pleaseWait',()=>{
        modalController.dismiss(registerEmail, 'confirm');
        showAlert('completed', '', 'registrationSuccess', 'ok');
      }, 750);
    }
  }).catch(()=>{
    showAlert('error', '', 'systemError', 'ok');
  });
}

onMounted(() => {
  registerEmailInput.value = props.registerEmail;
});
</script>

<style scoped>

</style>