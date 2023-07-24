import { InjectionKey } from "vue"
import { createStore, useStore as baseUseStore, Store } from "vuex"
import LoginModel from "@/model/loginModel";

export interface State {
    user: any
}

export const key: InjectionKey<Store<State>> = Symbol();
export default createStore<State>({
    state() {
        return {
            user: LoginModel
        };
    },
    mutations: {
        settingUser(state, data: LoginModel) {
            state.user = data
        }
    },
    actions: {
        settingUser(context, data: number) {
            return context.commit("settingUser", data)
        }
    }

});

export const useStore = () => {
    return baseUseStore(key);
};