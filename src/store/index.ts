import { createStore } from 'vuex'

interface IState {
  cacheArr: any[]
}
interface IMutations {
  setCacheView: (...args: any[]) => void
}


export default createStore<IState>({
  state: {
    cacheArr: []
  },
  mutations: {
    setCacheView (state, param: string) {
      if (!state.cacheArr.includes(param)) {
        state.cacheArr.push(param)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
