import { InjectionKey } from "vue"
import { createStore, useStore as baseUseStore, Store } from "vuex"

export interface State {
    init: any
}

export const key: InjectionKey<Store<State>> = Symbol();
export default createStore<State>({
    state() {
        return {
            init: []
        };
    },
    mutations: {
        init(state, index) {

            state.init = index
        }
    },
    actions: {
        init(context, data: number) {
            return context.commit("init", data)
        }
    }

});

export const useStore = () => {
    return baseUseStore(key);
};