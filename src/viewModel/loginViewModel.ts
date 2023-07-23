import {catchError, fromEvent, of, ReplaySubject, take, takeUntil, tap} from 'rxjs'
import Result, {Code} from "@/common/result";
import  "@/common/util";
import LoginService from "@/service/loginService";
import LoginModel from "@/model/loginModel";

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
    doLogin(id: HTMLInputElement, password: HTMLInputElement, button: HTMLElement, event="click") {

    }
}

const LoginViewModel = new ViewModel();
export default LoginViewModel
