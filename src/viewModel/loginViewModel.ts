import {
  catchError,
  filter, firstValueFrom,
  fromEvent, mergeMap,
  of,
  ReplaySubject, switchMap, EMPTY
} from 'rxjs'
import Result, {Code} from "@/common/result";
import  "@/common/util";
import LoginService from "@/service/loginService";
import LoginModel from "@/model/loginModel";
import {Ref} from "vue";
import Global from "@/common/global";
import store from "@/store";

// HTMLElement 대상 확인
export const Focus = {
  ID: 0,
  PASSWORD: 1,
};

class ViewModel {
    service = new LoginService()
    // Observable
    obLogin = new ReplaySubject<Result<any>>()

    // Function
    doLogin(id: Ref, password: Ref, button: Ref, event="click") {

    }
}

const LoginViewModel = new ViewModel();
export default LoginViewModel
