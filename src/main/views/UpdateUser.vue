<template>
  <div>
    姓名：<input type="text" v-model="user.name" />
    <br />
    职称：<input type="text" v-model="user.title" />
    <br />
    电话：<input type="text" v-model="user.phone" />
    <br />
    账号：<input type="text" v-model="user.account" disabled />
    <br />
    密码: &nbsp;&nbsp;<input type="text" v-model="user.password" />
    <br />
    <button type="button" @click="submit">修改</button>
  </div>
</template>

<script>
import bus from "@/util/Bus";
import { getMyInfo } from "@/main/api/Main";
import { patchMyInfo } from "@/main/api/Main";
export default {
  data: () => ({
    uid: sessionStorage.getItem("uid"),
    user: {
      name: null,
      title: null,
      phone: null,
      account: null,
      password: null
    }
  }),
  created() {
    getMyInfo({ uid: this.uid });
    bus.$on(bus.user, data => {
      this.user = data;
    });
  },
  methods: {
    submit() {
      this.user.insertTime = this.user.insertTime.replace("T", " ");
      console.log(this.user);
      patchMyInfo({ uid: this.uid, user: this.user });
    }
  }
};
</script>

<style></style>
