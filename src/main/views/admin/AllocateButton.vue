<template>
  <div>
    <h3>tips:黑字显示的为可用的教师，红色显示的为存在冲突的教师</h3>
    <template v-for="(u, ind) in availableUser">
      <label :key="'l' + ind"
        ><input
          type="checkbox"
          v-model="examDetail.users"
          :value="u.id"
          :key="ind"
        />{{ u.name }}</label
      >
      <br :key="'b' + ind" />
    </template>
    <template v-for="(u, ind) in conflictUsers">
      <label :key="'l2' + ind"
        ><input
          type="checkbox"
          v-model="examDetail.users"
          :value="u.id"
          :key="ind"
        /><span>{{ u.name }}</span></label
      >
      <br :key="'b2' + ind" />
    </template>
    <br />
    {{ examDetail }}
    <br />
    <button type="button" @click="submit">提交</button>
  </div>
</template>

<script>
import { getUsers } from "@/main/api/Main";
import { getUserStatus } from "@/main/api/Main";
import { allocate } from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  components: {},
  data: () => ({
    block: "none",
    users: [
      {
        name: null
      }
    ],
    availableUser: [
      {
        name: null
      }
    ],
    conflictUsers: [
      {
        name: null
      }
    ],
    examDetail: { users: [] }
  }),
  methods: {
    open() {
      getUsers();
      this.block = "block";
    },
    close() {
      this.block = "none";
    },
    add() {
      this.close();
    },
    submit() {
      allocate({ eid: this.$route.params.eid, users: this.examDetail.users });
    }
  },
  created() {
    //alert(this.$route.params.eid);
    getUserStatus({ eid: this.$route.params.eid });
    bus.$on(bus.users, data => {
      this.users = data;
    });
    bus.$on(bus.conflictUsers, data => {
      this.conflictUsers = data;
    });
    bus.$on(bus.availableUser, data => {
      this.availableUser = data;
    });
  }
};
</script>

<style scoped>
#bg {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgb(56, 56, 56);
  z-index: 2;
  top: 0;
  left: 0;
}
#content {
  padding: 5px;
  text-align: left;
  display: none;
  width: 500px;
  position: fixed;
  top: 20%;
  background: #fff;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
}
span {
  color: red;
}
</style>
