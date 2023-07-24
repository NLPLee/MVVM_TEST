<script setup lang="ts">
import {
    IonContent,
    IonPage,
    IonLabel,
    IonItem,
    IonInput,
    IonCheckbox,
    IonButton
} from '@ionic/vue'
import {onMounted, ref, onBeforeUnmount, nextTick, reactive, computed} from "vue";
import LoginViewModel from "@/viewModel/loginViewModel";
import store from "@/store";

const userid = ref()
const password = ref()
const button = ref()

onMounted( () => {
    input()
    event()
    bind()
})

onBeforeUnmount(() => {
   LoginViewModel.obLogin.unsubscribe();
})

/**
 * 데이터 초기화
 */
function input() {

}

/**
 * 이벤트 선언
 */
function event() {

}

/**
 * 데이터 바인딩
 */
function bind() {

}

</script>
<template>
  <IonPage>
      <IonLabel>서비스 이용을 위해 로그인 해주세요.</IonLabel>
    <IonContent :fullscreen="true" class="contents" scr>
        <div class="logo"><img src="../assets/img/logo.png"></div>
        <div class="login-title"><img src="../assets/img/login_title.png"></div>
        <IonLabel class="login-content">서비스 이용을 위해 로그인 해주세요.</IonLabel>
        <div class="my-44"></div>
        <IonItem class="login-input">
            <IonLabel position="floating" class="login-floating">아이디</IonLabel>
            <IonInput ref="userid"  placeholder="아이디를 입력하세요."  class="login-floating-input"></IonInput >
        </IonItem>
        <IonItem class="login-input">
            <IonLabel position="floating" class="login-floating">비밀번호</IonLabel>
            <IonInput type="password" ref="password" placeholder="비밀번호를 입력하세요." class="login-floating-input"></IonInput>
        </IonItem>
        <div class="my-5"></div>
        <div class="content-center">
            <IonCheckbox class="check" labelPlacement="end">아이디 저장</IonCheckbox>
        </div>
        <IonButton ref="button" expand="block" class="login-btn h-10 my-5">로그인</IonButton>
    </IonContent>
  </IonPage>
</template>

<style scoped>
.contents {
    --background: url(../assets/img/bg.png) 0 0/100% 100% no-repeat;
    margin-left: 30px;
    margin-right: 30px;
    --padding-start: 30px !important;
    --padding-end: 30px !important;
}
.logo {
    margin-top:75px;
    width: 114px;
    height: 29.61px;
    flex-shrink: 0;
    position: relative;
}

.login-title {
    margin-top: 46.82px;
    width: 155.967px;
    height: 26.016px;
    flex-shrink: 0;
}

.login-content {
    display: inline-block;
    margin-top: 13.55px;
    color: rgba(255, 255, 255, 0.80);
    font-family: Noto Sans KR;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
}

.login-input {
    --background: transparent;
    --border-color: #AAA !important;
    --highlight-color-focused: #FF746B;
}

.login-floating {
    color: #AAA ;
    font-size: 16px;
}

.item-has-focus > ion-label {
    color: #AAA !important;
    font-family: Noto Sans KR;
    font-size: 16px;
}

.login-floating-input {
    color: #FFF ;
    font-size: 16px;
}

.item-has-focus > ion-input {
    color: #FFF;
    font-size: 16px;
}

.check {
    --checkbox-background:url('../assets/img/icon_check.svg');
    --checkbox-background-checked: url('../assets/img/icon_check_checked.svg');
    height: 20px;
    --border-width: 0;
    --border-radius :10px;
    --checkmark-color: transparent;
}

.label-text-wrapper {
    margin-inline: 6px 0px !important;
}

.login-btn::part(native){
    border-radius: 8px;
    background: linear-gradient(143deg, #FF905F 0%, #FF6543 100%);
}

</style>
