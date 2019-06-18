<template>
  <div>
    <template v-for="(u, ind) in users">
      <label :key="'l' + ind"
        ><input
          type="checkbox"
          v-model="taskDetail.users"
          :value="u.id"
          :key="ind"
        />{{ u.name }}</label
      >
      <br :key="'b' + ind" />
    </template>
    <br />
    {{ taskDetail }}
    <br />
    <button type="button" @click="submit">提交</button>
  </div>
</template>

<script>
import { allocateTask } from "@/main/api/Main";
import { getUsableUser } from "@/main/api/Main";
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
    taskDetail: { users: [] }
  }),
  methods: {
    submit() {
      allocateTask({
        tid: this.$route.params.tid,
        users: this.taskDetail.users
      });
    }
  },
  created() {
    //alert(this.$route.params.tid);
    getUsableUser({ tid: this.$route.params.tid });
    bus.$on(bus.users, data => {
      this.users = data;
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
