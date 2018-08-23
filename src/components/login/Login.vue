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
            <div class="remeber">
              <input type="checkbox" />
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
export default {
  methods: {
    login: function() {
      location.hash = "#/main";
    }
  }
};
</script>
