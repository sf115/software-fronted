<template>
  <div>
    <form>
      <label> 任务名称：<input type="text" v-model="task.title"/></label>
      <br />
      任务描述：<input type="text" v-model="task.description" />
      <br />
      截止时间：<input type="text" v-model="task.deadLine" />
      <br />
      任务状态：<input
        type="text"
        v-model="task.isLocked"
        placeholder="1:关闭 0:正常"
      />
      <br />
      <button type="button" @click="submit">
        提交
      </button>
    </form>
  </div>
</template>

<script>
import bus from "@/util/Bus";
import { getTask } from "@/main/api/Main";
import { patchTask } from "@/main/api/Main";
export default {
  data: () => ({
    task: {
      id: null,
      title: null,
      description: null,
      deadLine: null,
      insertTime: null,
      isLocked: null
    }
  }),
  created() {
    //alert(this.$route.params.tid);
    getTask({ tid: this.$route.params.tid });
    bus.$on(bus.task, data => {
      this.task = data;
    });
  },
  methods: {
    submit() {
      // 不修改时间的格式的化会报json反序列化错误，不知为何
      this.task.insertTime = this.task.insertTime.replace("T", " ");
      console.log(this.user);
      patchTask({ tid: this.$route.params.tid, task: this.task });
    }
  }
};
</script>

<style></style>
