<template>
  <div id="app">
    <template v-if="isAdmin">
      <mysidebar id="sidebar" />
      <div id="routerview">
        <router-view :key="$route.path" />
      </div>
    </template>
    <template v-else>
      <usersidebar id="sidebar" />
      <div id="routerview">
        <router-view :key="$route.path" />
      </div>
    </template>
    <alertdialog />
  </div>
</template>
<script>
import bus from "@/util/Bus";
//import { getMain } from "./api/Main";
export default {
  components: {
    mysidebar: () => import("@/main/views/MySidebar"),
    alertdialog: () => import("@/components/AlertDialog"),
    usersidebar: () => import("@/main/views/UserSidebar")
  },
  data: () => ({
    isAdmin: false
  }),
  created() {
    bus.$on(bus.isAdmin, data => {
      this.isAdmin = data;
    });
    //getMain();
  },
  beforeDestroy() {
    bus.$off(bus.isAdmin);
  }
};
</script>

<style>
#app {
  height: 100vh;
  width: 100vw;
}
#sidebar {
  width: 280px;
  margin: 5px;
  display: inline-block;
  border: 1px solid red;
}
#routerview {
  vertical-align: top;
  margin: 5px;
  border: 1px solid red;
  width: calc(100vw - 320px);
  height: 95vh;
  display: inline-block;
}
</style>
