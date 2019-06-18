<template>
  <div>
    <button v-if="isAdmin">hello</button>
    <button type="button">
      <router-link to="/exams">监考管理</router-link>
    </button>
    <br />
    <button type="button">
      <router-link to="/users">教师管理</router-link>
    </button>
    <br />
    <button type="button">
      <router-link to="/tasks">任务管理</router-link>
    </button>
  </div>
</template>

<script>
import bus from "@/util/Bus";
import { getExams } from "@/main/api/Main";
import { getUsers } from "@/main/api/Main";
export default {
  data: () => ({
    isAdmin: false
  }),
  created() {
    getExams();
    getUsers();
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
