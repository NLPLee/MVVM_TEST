import {catchError, defer, map, Observable, of, refCount, ReplaySubject, shareReplay, take, throwError, EMPTY} from 'rxjs'
import Axios, { AxiosRequestConfig } from  'axios'
import Utils from "@/common/util"
import Global from "@/common/global";
import Result, {Code} from "@/common/result";

export default class CommonService {
    host?: string = ""
    config: AxiosRequestConfig = {}

    private async initializationAxios() {
        await this.setConfig(this.host || "")
        const axiosInstance = Axios.create(this.config);
        return axiosInstance;
    };

    public async setConfig(host: string, config: any = "") {
        this.host = host
        this.config = {
            responseType: 'json',
            headers: {
                "Authorization": await Global.accessToken()
            }
        } as AxiosRequestConfig

    }

    protected async get<T>(path: string, queryParams?: any): Promise<Observable<T>> {
        const requestURL = this.settingURL(this.host, path)
        Utils.console(`GET: ${requestURL}`)
        Utils.console(`Query: ${JSON.stringify(queryParams, null, 2)}`)
        const axiosInstance = await this.initializationAxios()
        return defer(() =>
          axiosInstance.get<T>(requestURL, {params: queryParams}))
          .pipe(
            map(result => {
                Utils.console(`Response: ${JSON.stringify(result, null, 2)}`);
                return result.data
            }),
            catchError(error => {
                if (error.response && error.response.status === 403) {
                    Utils.console(`Error 403 Response: ${JSON.stringify(error.message, null, 2)}`);
                    return throwError(error.message)
                }
                Utils.console(`Error Response: ${JSON.stringify(error.message, null, 2)}`);
                return throwError(error.message)
            }),
            shareReplay(1)
          )
    }

    a(b: any) {
        b.pipe(
          map(result => {
              Utils.console(`Response: ${JSON.stringify(result, null, 2)}`);
              return new Result(Code.SUCCESS, result.data)
          }),
          catchError(error => {
              return of(new Result(Code.FAIL, null, error))
          })
        )
    }

    protected async post<T>(path: string, params?: object): Promise<Observable<any>> {
        const requestURL = this.settingURL(this.host, path);
        const axiosInstance = await this.initializationAxios();
        Utils.console(`POST: ${requestURL}`);
        Utils.console(`Header: ${JSON.stringify(this.config.headers, null, 2)}`);
        Utils.console(`Params: ${JSON.stringify(params, null, 2)}`);

        return defer(() =>
          axiosInstance.post<T>(requestURL, params)
        ).pipe(
          map(result => {
              Utils.console(`Response: ${JSON.stringify(result, null, 2)}`);
              return new Result(Code.SUCCESS, result.data)
          }),
          catchError(error => {
              return of(new Result(Code.FAIL, null, error))
          })
        )
    }

    protected async postForm<T>(path: string, params?: object): Promise<Observable<any>>  {
        const requestURL = this.settingURL(this.host, path)

        const axiosInstance = await this.initializationAxios()
        Utils.console(`POST(Form): ${requestURL}`)
        Utils.console(`Header: ${JSON.stringify(this.config.headers, null, 2)}`)
        Utils.console(`Params: ${JSON.stringify(params, null, 2)}`)
        return defer(() =>
          axiosInstance.postForm<T>(requestURL, params))
          .pipe(
            map(result => {
                Utils.console(`Response: ${JSON.stringify(result, null, 2)}`);
                return new Result(Code.SUCCESS, result.data)
            }),
            catchError(error => {
                return of(new Result(Code.FAIL, null, error))
            })
          )
    }

    protected async put<T>(path: string, params?: object): Promise<Observable<any>> {
        const requestURL = this.settingURL(this.host, path)
        Utils.console(`PUT: ${requestURL}`)
        Utils.console(`Params: ${JSON.stringify(params, null, 2)}`)
        const axiosInstance = await this.initializationAxios()
        return defer(() =>
          axiosInstance.put<T>(requestURL, params))
          .pipe(
            map(result => {
                Utils.console(`Response: ${JSON.stringify(result, null, 2)}`);
                return new Result(Code.SUCCESS, result.data)
            }),
            catchError(error => {
                return of(new Result(Code.FAIL, null, error))
            })
          )
    }

    protected async delete<T>(path: string, params?: object): Promise<Observable<T>> {
        const requestURL = this.settingURL(this.host, path)
        Utils.console(`delete: ${requestURL}`)
        Utils.console(`Params: ${JSON.stringify(params, null, 2)}`)
        const axiosInstance = await this.initializationAxios()
        return defer(() =>
          axiosInstance.delete<T>(requestURL, params))
          .pipe(
            map(result => {
                Utils.console(`Response: ${JSON.stringify(result, null, 2)}`);
                return result.data
            }),
            catchError(error => {
                if (error.response && error.response.status === 403) {
                    Utils.console(`Error 403 Response: ${JSON.stringify(error.message, null, 2)}`);
                    return of(error.message)
                }
                Utils.console(`Error Response: ${JSON.stringify(error.message, null, 2)}`);
                return of(error.message)
            })
          )
    }

    private settingURL(host?: string, path?: string): string {
        return `${host}/${path}`
    }

    /**
     * API 응답값 next 처리
     * @param req 옵저버블 요청
     * @param ob 옵저버 구독 처리 변수
     */
    fetch(req: Observable<any>, ob: ReplaySubject<any>) {

        req
            .pipe(
                take(1),
                catchError(e => of(alert( e.response.data.message)))
            ).subscribe(
            (res: any) => {
                Utils.console("Fetch")
                Utils.console(res)
                ob.next(res)
            }
        )
    }
}