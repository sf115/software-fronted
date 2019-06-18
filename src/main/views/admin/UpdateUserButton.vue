<template>
  <div>
    <form>
      <label> 教师姓名：<input type="text" v-model="user.name"/></label>
      <br />
      教师职称：<input type="text" v-model="user.title" />
      <br />
      教师权限：<input
        type="text"
        v-model="user.authority"
        placeholder="0:普通 1:管理员"
      />
      <br />
      <!--datetime-local-->
      账号：<input typeW="text" v-model="user.account" disabled />
      <br />
      密码：<input type="text" v-model="user.password" />
      <br />

      <button type="button" @click="submit">
        提交
      </button>
    </form>
  </div>
</template>

<script>
import bus from "@/util/Bus";
import { getUser } from "@/main/api/Main";
import { patchUser } from "@/main/api/Main";
export default {
  data: () => ({
    user: {
      id: null,
      name: null,
      title: null,
      phone: null,
      authority: null,
      account: null,
      password: null,
      description: null,
      insertTime: null
    }
  }),
  created() {
    //alert(this.$route.params.uid);
    getUser({ uid: this.$route.params.uid });
    bus.$on(bus.user, data => {
      this.user = data;
    });
  },
  methods: {
    submit() {
      // 不修改时间的格式的化会报json反序列化错误，不知为何
      this.user.insertTime = this.user.insertTime.replace("T", " ");
      console.log(this.user);
      patchUser({ uid: this.$route.params.uid, user: this.user });
    }
  }
};
</script>

<style></style>
