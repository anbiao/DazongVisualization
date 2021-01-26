import Vue from 'vue'
import {
  DEFAULT_DAZONG_CARGO
} from '@/store/mutation-types'

const dazong = {
  state: {
    cargo: '',
  },
  mutations: {
    SET_DAZONG_CARGO: (state, name) => {
      Vue.ls.set(DEFAULT_DAZONG_CARGO, name)
      state.cargo = name
    }
  },
  actions: {
    ToggleDazongCargo({ commit }, name) {
      commit('SET_DAZONG_CARGO', name)
    }
  }
}

export default dazong