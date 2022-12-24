import Vue from 'vue'
import { uid } from 'quasar'

const state = {
  tasks: {
    
  }
 
}

const mutations = {
  UPDATE_TASK(state, payload){
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  DELETE_TASK(state, id){
    Vue.delete(state.tasks, id)
  },
  ADD_TASK(state, payload){
    Vue.set(state.tasks, payload.id, payload.task)
  }
}

const actions = {
  updateTask({ commit }, payload) {
    commit('UPDATE_TASK', payload)   
  },
  deleteTask({ commit }, id) {
    commit('DELETE_TASK', id)
  },
  addTask( { commit }, task){
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    commit('ADD_TASK', payload)
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default{
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}