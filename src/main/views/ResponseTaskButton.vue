<template>
  <div>
    回复内容：<input type="textarea" v-model="taskDetail.responseContent" />
    <br />
    <button type="button" @click="submit">完成任务</button>
  </div>
</template>

<script>
import bus from "@/util/Bus";
import { responseTask } from "@/main/api/Main";
import { getTaskDetail } from "@/main/api/Main";
export default {
  data: () => ({
    taskDetail: {
      id: null,
      responseContent: null,
      insertTime: null
    }
  }),
  methods: {
    submit() {
      this.taskDetail.task.insertTime = this.taskDetail.task.insertTime.replace(
        "T",
        " "
      );
      this.taskDetail.user.insertTime = this.taskDetail.user.insertTime.replace(
        "T",
        " "
      );
      console.log(this.taskDetail);
      responseTask({
        uid: this.$route.params.uid,
        tid: this.$route.params.tid,
        taskDetail: this.taskDetail
      });
    }
  },
  created() {
    getTaskDetail({ uid: this.$route.params.uid, tid: this.$route.params.tid });
    bus.$on(bus.taskDetail, data => {
      this.taskDetail = data;
    });
  }
};
</script>

<style></style>
