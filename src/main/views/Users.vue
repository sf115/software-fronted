<template>
  <div>
    <table>
      <tr>
        <th>#</th>
        <th>姓名</th>
        <th>监考次数</th>
        <th>职称</th>
        <th>权限</th>
        <th>操作</th>
      </tr>
      <tr v-for="(u, index) in users" :key="index">
        <td>{{ index }}</td>
        <td>{{ u.name }}</td>
        <td>{{ u.invigilation_cnt }}</td>
        <td>{{ formatTitle(u.title) }}</td>
        <td>{{ formatAuth(u.authority) }}</td>
        <td>
          <router-link :to="`/users/${u.id}`">修改</router-link>
        </td>
      </tr>
    </table>

    <adduserbutton />
  </div>
</template>

<script>
import bus from "@/util/Bus";
import { getUsers } from "@/main/api/Main";
export default {
  components: {
    adduserbutton: () => import("./admin/AddUserButton")
  },
  data: () => ({
    isAdmin: false,
    users: [
      {
        id: null,
        name: null,
        invigilation_cnt: null,
        authority: null,
        title: null
      }
    ]
  }),
  created() {
    getUsers();
    bus.$on(bus.users, data => {
      this.users = data;
    });
    bus.$on(bus.isAdmin, data => {
      this.isAdmin = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.users);
  },
  computed: {
    formatTitle() {
      return data => {
        if (data == 1) return "讲师";
        else if (data == 2) return "副教授";
        else return "教授";
      };
    },
    formatAuth() {
      return data => {
        if (data == 1) return "管理员";
        else return "普通用户";
      };
    }
  }
};
</script>

<style></style>
