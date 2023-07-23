export default class Utils {

    /**
     * @description Input Number에서 자리수 체크를 하기 위함
     * @param object Input Tag
     */
    static maxLengthCheck(object: any, max_length: number){
        if (object.target.value.length > max_length){
            object.target.value = object.target.value.slice(0, max_length);
        }
    }

    /**
     * @description Email 정규식 확인
     * @param object Email
     */
    static checkEmail(email: string) {
        const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        return reg_email.test(email);
    }

    /**
     * @description 배포모드일 시, console.log 생략
     * @param message 로그값
     */
    static console(message?: any, title = "") {
        if (process.env.NODE_ENV === 'production') return;
        console.log(`${title}:${JSON.stringify(message)}`);
    }

    /**
     * URL get 파라미터 파싱
     * @param key
     */
    static getUrlQuery(key: string) {
        const params = new URLSearchParams(window.location.search);
        return params.get(key) ?? ""
    }

    /**
     * 이미지 path 세팅
     * @param name 파일이름
     */
    static getImage(name: string) {
        const path = `../assets/${name}`
        return new URL(path, import.meta.url).href
    }
}

declare global {
    interface String {
        comma(): string
        phone(): string
        birth(): string
        card(): string
        cardSecured(): string
        isNotVaild(): boolean
    }
}

/**
 * 숫자에 콤마를 삽입 하는 프로토타입
 */
String.prototype.comma = function() {
    const parts = this.toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return parts.join('.');
}

/**
 * 휴대폰 번호에 - 를 삽입하는 프로토타입
 */
String.prototype.phone = function() {
    return this.replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/\-{1,2}$/g, "")
}

/**
 * 생년월일에 - 를 삽입하는 프로토타입
 */
String.prototype.birth = function() {
    return this.replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g, "$1-$2-$3").replace(/\-{1,2}$/g, "")
}

/**
 * 신용카드 번호에 - 를 삽입하는 프로토타입
 */
String.prototype.card = function() {
    return this.replace(/^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3-$4").replace(/\-{1,2}$/g, "")
}

/**
 * 신용카드의 민감한 번호에 *로 채워넣는 프로토타입
 */
String.prototype.cardSecured = function() {
    return this.replace(/^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g, "$1-****-****-$4").replace(/\-{1,2}$/g, "")
}

String.prototype.isNotVaild = function() {
    return this.trim().length <= 0
}


