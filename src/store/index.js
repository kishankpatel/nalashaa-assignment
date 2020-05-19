import Vue from 'vue';
import Vuex from 'vuex';
import defaultData from '../Data';
const modifierList = [
  'AA - AA',
  'AB - AB',
  'AC - AC',
  'AD - AD',
  'AE - AE'
]

const positions = {
  1: '#4CAF50',
  2: '#00BCD4',
  3: '#FF9800',
  4: '#9C27B0'
}

Vue.use(Vuex);

export const state = () => (
  {
    services: [],
    modifierList,
    positions
  }
);

export const mutations = {
  setServices(state, services) {
    state.services = services
  },
  addService(state, service) {
    state.services.unshift(service);
  }
};

export const actions = {
  loadServices({ commit }) {
    commit('setServices', defaultData);
  },
  deleteService ({commit}, service) {
    let services = Object.assign([], this.state.services)
    let index = this.state.services.indexOf(service)
    services.splice(index, 1);
    commit('setServices', services);
  },
  createService ({commit}, service) {
    service['id'] = Math.random().toString(36).substring(3);
    commit('addService', service);
  },
  updateService ({commit}, service) {
    let services = Object.assign([], this.state.services)
    let data = this.state.services.find(s => s.id === service.id)
    let index = services.indexOf(data)
    services.splice(index, 1, service);
    commit('setServices', services);
  }
};

export const getters = {
  services(state) {
    return state.services;
  },
  modifiers(state) {
    return state.modifiers;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
