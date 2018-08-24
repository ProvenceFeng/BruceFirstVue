const toggleRememberMe = 'login/toggleRememberMe';
const state = {
  isRememberMe:false
};
const getters = {
  
};
const mutations = {
  [toggleRememberMe](state){
    state.isRememberMe=!state.isRememberMe
  }
};

const actions = {
  [toggleRememberMe] (context) {
    context.commit(toggleRememberMe)
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
export const actionTypes={
  toggleRememberMe
};
