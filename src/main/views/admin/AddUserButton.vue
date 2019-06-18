<template>
  <div>
    <button type="submit" @click="open">添加老师</button>
    <br />
    <div id="bg" v-bind:style="{ display: block }">
      <div id="content" v-bind:style="{ display: block }">
        <form>
          <label> 教师姓名：<input type="text" v-model="user.name"/></label>
          <br />
          教师职称：<input
            type="text"
            v-model="user.title"
            placeholder="1:讲师 2:副教授 3:教授"
          />
          <br />
          教师权限：<input
            type="text"
            v-model="user.authority"
            placeholder="0:普通 1:管理员"
          />
          <br />
          <!--datetime-local-->
          账号：<input type="text" v-model="user.account" />
          <br />
          密码：<input type="text" v-model="user.password" />
          <br />

          <button type="button" @click="add">
            提交
          </button>
        </form>
        <p style="text-align:right">
          <button @click="close">取消</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { postUser } from "@/main/api/Main";
export default {
  data: () => ({
    block: "none",
    user: {
      id: null,
      name: null,
      authority: null,
      title: null,
      account: null,
      password: null
    }
  }),
  methods: {
    open() {
      this.block = "block";
    },
    close() {
      this.block = "none";
    },
    add() {
      postUser({ user: this.user });
      this.close();
    }
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
</style>
