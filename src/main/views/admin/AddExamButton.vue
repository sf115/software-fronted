<template>
  <div>
    <button type="submit" @click="open">添加考试</button>
    <br />
    <div id="bg" v-bind:style="{ display: block }">
      <div id="content" v-bind:style="{ display: block }">
        <form>
          <label> 考试名称：<input type="text" v-model="exam.name"/></label>
          <br />
          考试地点：<input type="text" v-model="exam.location" />
          <br />
          监考人数：<input type="text" v-model="exam.numbersOfTeacher" />
          <br />
          <!--datetime-local-->
          开始时间：<input type="text" v-model="exam.beginTime" />
          <br />
          结束时间：<input type="text" v-model="exam.endTime" />
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
import { postExam } from "@/main/api/Main";
export default {
  data: () => ({
    block: "none",
    exam: {
      id: null,
      name: null,
      location: null,
      beginTime: null,
      endTime: null,
      numbersOfTeacher: null
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
      postExam({ exam: this.exam });
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
