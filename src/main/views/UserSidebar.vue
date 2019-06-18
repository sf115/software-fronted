<template>
  <div>
    <button type="button">
      <router-link to="/my/exams">我的监考</router-link>
    </button>
    <br />
    <button type="button">
      <router-link to="/my/users/">个人信息</router-link>
    </button>
    <br />
    <button type="button">
      <router-link to="/my/tasks">我的任务</router-link>
    </button>
  </div>
</template>

<script>
import bus from "@/util/Bus";
export default {
  data: () => ({
    isAdmin: false,
    uid: sessionStorage.getItem("uid")
  }),
  created() {
    //alert(this.uid);
    bus.$on(bus.isAdmin, data => {
      this.isAdmin = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.isAdmin);
  }
};
</script>

<style></style>
