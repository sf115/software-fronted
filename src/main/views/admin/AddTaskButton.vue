<template>
  <div>
    <button type="submit" @click="open">添加任务</button>
    <br />
    <div id="bg" v-bind:style="{ display: block }">
      <div id="content" v-bind:style="{ display: block }">
        <form>
          <label> 任务名称：<input type="text" v-model="task.title"/></label>
          <br />
          任务描述：<input type="text" v-model="task.description" />
          <br />
          截止时间：<input type="text" v-model="task.deadLine" />
          <br />
          <!--datetime-local-->
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
import { postTask } from "@/main/api/Main";
export default {
  data: () => ({
    block: "none",
    task: {
      id: null,
      title: null,
      description: null,
      deadLine: null
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
      postTask({ task: this.task });
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
