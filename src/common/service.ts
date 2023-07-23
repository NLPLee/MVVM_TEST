import { catchError, defer, map, Observable, of, ReplaySubject, take } from 'rxjs'
import Axios, { AxiosRequestConfig } from  'axios'
import Utils from "@/common/util"

export default class CommonService {
    host?: string = ""
    config: AxiosRequestConfig = {}

    private initializationAxios() {
        this.setConfig(this.host || "")
        const axiosInstance = Axios.create(this.config);
        return axiosInstance;
    };

    public setConfig(host: string, config: any = "") {
        this.host = host
        this.config  = {
            responseType: 'json',
        } as AxiosRequestConfig

    }

    protected get<T>(path: string, queryParams?: any): Observable<T> {
        const requestURL = this.settingURL(this.host, path)
        Utils.console(`GET: ${requestURL}`)
        Utils.console(`Query: ${JSON.stringify(queryParams, null, 2)}`)
        const axiosInstance = this.initializationAxios()
        return defer(()=>
            axiosInstance.get<T>(requestURL, {params: queryParams}))
            .pipe(map(result => result.data)
            )
    }

    protected post<T>(path: string, params?: object): Observable<T> {
        const requestURL = this.settingURL(this.host, path)
        Utils.console(`POST: ${requestURL}`)
        Utils.console(`Params: ${JSON.stringify(params, null, 2)}`)
        const axiosInstance = this.initializationAxios()
        return defer(()=>
            axiosInstance.post<T>(requestURL, params))
            .pipe(map(result => {
                Utils.console(`Response: ${result.data}`)
                return result.data
            } ))
    }

    protected postForm<T>(path: string, params?: object): Observable<T> {
        const requestURL = this.settingURL(this.host, path)
        Utils.console(`POST(Form): ${requestURL}`)
        Utils.console(`Params: ${JSON.stringify(params, null, 2)}`)
        const axiosInstance = this.initializationAxios()
        return defer(()=>
          axiosInstance.postForm<T>(requestURL, params))
          .pipe(map(result => {
              Utils.console(`Response: ${result}`)
              return result.data
          } ))
    }


    protected put<T>(path: string, params?: object): Observable<T> {
        const requestURL = this.settingURL(this.host, path)
        Utils.console(`PUT: ${requestURL}`)
        Utils.console(`Params: ${JSON.stringify(params, null, 2)}`)
        const axiosInstance = this.initializationAxios()
        return defer(()=>
            axiosInstance.put<T>(requestURL, params))
            .pipe(map(result => result.data))
    }

    protected delete<T>(path: string, params?: object): Observable<T> {
        const requestURL = this.settingURL(this.host, path)
        Utils.console(`delete: ${requestURL}`)
        Utils.console(`Params: ${JSON.stringify(params, null, 2)}`)
        const axiosInstance = this.initializationAxios()
        return defer(()=>
            axiosInstance.delete<T>(requestURL, params))
            .pipe(map(result => result.data)
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