<template>
  <div>
    <table>
      <tr>
        <th>#</th>
        <th>考试科目</th>
        <th>开始时间</th>
        <th>结束时间</th>
        <th>地点</th>
        <th>状态</th>
      </tr>
      <tr v-for="(e, index) in exams" :key="index">
        <td>{{ index }}</td>
        <td>{{ e.name }}</td>
        <td>{{ e.beginTime }}</td>
        <td>{{ e.endTime }}</td>
        <td>{{ e.location }}</td>
        <td>{{ e.status == 1 ? "已分配" : "未分配" }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import bus from "@/util/Bus";
//import { getExamDetails } from "@/main/api/Main";
import { getUserExam } from "@/main/api/Main";
export default {
  data: () => ({
    isAdmin: false,
    uid: sessionStorage.getItem("uid"),
    exams: [
      {
        name: null,
        location: null,
        status: null,
        beginTime: null,
        endTime: null
      }
    ]
  }),
  created() {
    getUserExam({ uid: this.uid });
    bus.$on(bus.exams, data => {
      this.exams = data;
    });
    bus.$on(bus.isAdmin, data => {
      this.isAdmin = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.exams);
  }
};
</script>

<style></style>
