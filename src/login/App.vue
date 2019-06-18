<template>
  <div id="app">
    <form ref="login">
      <input v-model="user.account" />
      <br />
      <input type="password" v-model="user.password" />
      <br />
      <button type="button" @click="login">登录</button>
    </form>
    <alert />
  </div>
</template>

<script>
import { login } from "./api/login";
export default {
  components: { alert: () => import("@/components/AlertDialog") },
  data: () => ({
    user: { account: null, password: null }
  }),
  methods: {
    login() {
      login(this.user);
      // 否则发送的user会被清空
      this.$nextTick(() => {
        this.user = { number: null, password: null };
      });
    }
  }
};
</script>

<style></style>
