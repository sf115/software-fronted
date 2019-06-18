<template>
  <div>
    <template>
      <table>
        <tr>
          <th>#</th>
          <th>任务名</th>
          <th>任务描述</th>
          <th>截止时间</th>
          <th>操作</th>
        </tr>
        <tr v-for="(t, index) in tasks" :key="index">
          <td>{{ index }}</td>
          <td>{{ t.title }}</td>
          <td>{{ t.description }}</td>
          <td>{{ t.deadLine }}</td>
          <td>
            <router-link
              :to="`/tasks/${t.id}`"
              tag="button"
              :disabled="t.isLocked == 1"
              >修改</router-link
            >
            <router-link
              :to="`/alloc/tasks/${t.id}`"
              tag="button"
              :disabled="t.isLocked == 1"
              >分配任务</router-link
            >

            <!-- <button @click="close(t)">关闭</button> -->
            <!-- <closebutton v-bind:task="t" /> -->
          </td>
        </tr>
      </table>
    </template>
    <addtaskbutton />
  </div>
</template>

<script>
import bus from "@/util/Bus";
import { getTasks } from "@/main/api/Main";
export default {
  components: {
    addtaskbutton: () => import("./admin/AddTaskButton")
    // closebutton: () => import("./admin/CloseButton")
  },
  data: () => ({
    isAdmin: false,
    tasks: [
      {
        id: null,
        title: null,
        description: null,
        deadLine: null,
        isLocked: null
      }
    ],
    able: true
  }),
  methods: {
    close(data) {
      data.isLocked = 1;
    }
  },
  created() {
    getTasks();
    bus.$on(bus.tasks, data => {
      this.tasks = data;
    });
    bus.$on(bus.isAdmin, data => {
      this.isAdmin = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.tasks);
  }
};
</script>

<style></style>
