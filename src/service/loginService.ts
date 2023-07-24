import { Observable } from 'rxjs';
import CommonService from "@/common/service"
import LoginModel from "@/model/loginModel";

export default class LoginService extends CommonService {

    /**
     * @date 2023-07-24
     * @author 이승인
     * @description 로그인 API 호출
     * @param param {
     *         osName: string : OS 종류
     *         osVersion: string : OS 버전
     *         deviceId: string : 디바이스 아이디
     *         launcherAppVersion: 앱 런처 버젼
     *         launcherAppId: string : 앱 런처 아이디
     *         deviceModel: string : 디바이스 모델명
     *         deviceType: string : 디바이스 종류
     *         pushId: string : PushNotification Token
     *         userId: string : 사용자 계정
     *         password: string : 사용자 패스워드
     *     }
     * @returns Observable<LoginModel>
     */
    async requestLogin(param: {
        osName: string,
        osVersion: string,
        deviceId: string,
        launcherAppVersion: string,
        launcherAppId: string,
        deviceModel: string,
        deviceType: string,
        pushId: string,
        userId: string,
        password: string
    }): Promise<Observable<LoginModel>> {
        return await super.postForm<LoginModel>("mapi/auth/login", param)
    }

    /**
     * @date 2023-07-24
     * @author 이승인
     * @description 유저정보 호출 API
     * @returns Observable<LoginModel>
     */
    async requestUserInfo(): Promise<Observable<LoginModel>> {
        return await super.post<LoginModel>("mapi/org/getLoggedUserInfo")
    }
}
