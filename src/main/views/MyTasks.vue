<template>
  <div>
    <template>
      <table>
        <tr>
          <th>#</th>
          <th>任务名</th>
          <th>任务描述</th>
          <th>截止时间</th>
          <th>任务状态</th>
          <th>回复内容</th>
          <th>操作</th>
        </tr>
        <tr v-for="(td, index) in taskDetails" :key="index">
          <td>{{ index }}</td>
          <td>{{ td.task.title }}</td>
          <td>{{ td.task.description }}</td>
          <td>{{ td.task.deadLine }}</td>
          <td>{{ formatStatus(td.finishStatus) }}</td>
          <td>{{ td.responseContent }}</td>
          <td>
            <router-link
              :to="`/users/${td.user.id}/tasks/${td.task.id}`"
              tag="button"
              :disabled="td.task.isLocked == 1"
              >回复任务</router-link
            >
            <!-- <closebutton v-bind:task="t" /> -->
            <router-link :to="`/taskDetails/${td.task.id}`" tag="button"
              >查看所有回复</router-link
            >
          </td>
        </tr>
      </table>
    </template>
  </div>
</template>

<script>
import bus from "@/util/Bus";
import { getMyTasks } from "@/main/api/Main";
export default {
  data: () => ({
    isAdmin: false,
    uid: sessionStorage.getItem("uid"),
    taskDetails: [
      {
        responseContent: null,
        task: {
          id: null,
          title: null,
          description: null,
          deadLine: null,
          isLocked: null
        },
        user: {
          id: null,
          name: null
        }
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
    getMyTasks({ uid: this.uid });
    bus.$on(bus.taskDetails, data => {
      this.taskDetails = data;
    });
    bus.$on(bus.isAdmin, data => {
      this.isAdmin = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.taskDetails);
  },
  computed: {
    formatStatus() {
      return data => {
        if (data == 1) {
          return "按时完成";
        } else if (data == 2) {
          return "未按时完成";
        } else if (data == 3) {
          return "未完成";
        }
      };
    }
  }
};
</script>

<style></style>
