<template>
  <div class="login-area">
    <div class="login">
      <div class="left-panel"></div>
      <div class="right-panel">
        <div class="content">
          <h1 class="title">Login</h1>
          <span class="info">Don't have a account?Create your account,it takes less than a minute.</span>
          <div class="account">
            <input placeholder="Please enter your account" />
            <hr/>
          </div>
          <div class="password">
            <input type="password" placeholder="Please enter your password" />
            <hr/>
          </div>
          <div class="setting-area">
            <div class="remeber" @click="toggleRememberMe">
              <div class="check-box" :class="{checked:isRememberMe}"></div>
              <span>Remember me</span>
            </div>
            <div class="forget">Forgot password?</div>
          </div>
          <div class="btn-area">
            <div class="btn" @click="login">Login</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex';
import {actionTypes} from '../../store/login.js'
export default {
  computed: mapState({
    // 箭头函数可使代码更简练
    isRememberMe: state => state.login.isRememberMe,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  }),
  methods: {
    ...mapActions({toggleRememberMe:actionTypes.toggleRememberMe}),
    login: function() {
      location.hash = "#/main";
    }
  }
};
</script>
