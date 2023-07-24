## Install

```bash
npm install 
```

## Start

```bash
npm start 
```

## 실습사항

<docgen-index>

* [`1. Proxcy 설정`](#1.Proxcy)
* [`2. ViewModel 작성`](#2.ViewModel)

</docgen-index>



### 1.Proxcy
vite.config.ts의 설정 수정
```typescript
proxy: {
   '/mapi': {
     target: '{{Cleverse HOST}}', 
     changeOrigin: true
   }
}
```
--------------------

### 3.Model
- 객체 속성 할당 및 Prototype


### 3.ViewModel
- doLogin 함수 작성 및 싱글턴 패턴에 대한 내용 설명
    - 요구사항 
      - rxjs 오퍼레이터를 이용하여 service에 대한 옵저버블 생성 후, 구독 처리
      - requestLogin() : jwt 토큰 획득, 
      - requestUserInfo() : 획득한 토큰을 이용하여 api 호출

### 4.View
- input, event, bind 함수의 팩토리얼 패턴 사용
-  구독을 통한 View와 ViewModel연결 (Model과의 의존성 제거)
   - 요구사항
      - rxjs 오퍼레이터를 이용하여 service에 대한 옵저버블 생성 후, 구독 처리
      - requestLogin() : jwt 토큰 획득,
      - requestUserInfo() : 획득한 토큰을 이용하여 api 호출

--------------------

