<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons, IonBackButton
} from '@ionic/vue'

import {useRoute} from 'vue-router'

const {id} = useRoute().params
</script>
<template>
  <IonPage>
    <IonHeader :translucent="true">
      <IonToolbar>
        <IonTitle>Detail</IonTitle>
        <IonButtons slot="start">
          <IonBackButton></IonBackButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <IonContent :fullscreen="true">
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Detail</IonTitle>
        </IonToolbar>
      </IonHeader>

      <h1>I was passed Item {{id}}</h1>

    </IonContent>
  </IonPage>
</template>

<style scoped>
</style>
