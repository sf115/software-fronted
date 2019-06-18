<template>
  <div>
    <table>
      <tr>
        <th>#</th>
        <th>任务名</th>
        <th>回复人</th>
        <th>回复内容</th>
      </tr>
      <tr v-for="(td, ind) in taskDetails2" :key="ind">
        <td>{{ ind }}</td>
        <td>{{ td.task.title }}</td>
        <td>{{ td.user.name }}</td>
        <td>{{ td.responseContent }}</td>
      </tr>
    </table>

    <!-- {{ taskDetails }} -->
  </div>
</template>

<script>
import bus from "@/util/Bus";
import { getResponses } from "@/main/api/Main";
export default {
  data: () => ({
    taskDetails2: [
      {
        responseContent: null,
        task: {
          title: null
        },
        user: {
          name: null
        }
      }
    ]
  }),
  created() {
    getResponses({ tid: this.$route.params.tid });
    bus.$on(bus.taskDetails2, data => {
      this.taskDetails2 = data;
    });
  }
};
</script>

<style></style>
