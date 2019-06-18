<template>
  <div>
    <table>
      <tr>
        <th>#</th>
        <th>考试科目</th>
        <th>开始时间</th>
        <th>结束时间</th>
        <th>地点</th>
        <th>所需人数</th>
        <th>监考人员</th>
        <th>操作</th>
        <th>分配状态</th>
      </tr>
      <tr v-for="(em, index) in examDetails" :key="index">
        <td>{{ index }}</td>
        <td>{{ em.exam.name }}</td>
        <td>{{ em.exam.beginTime }}</td>
        <td>{{ em.exam.endTime }}</td>
        <td>{{ em.exam.location }}</td>
        <td>{{ em.exam.numbersOfTeacher }}</td>
        <td>
          <div>
            <span v-for="(u, ind) in em.userlist" :key="ind"
              ><i>{{ u.name }} </i>
            </span>
          </div>
        </td>
        <td>
          <router-link :to="`/exams/${em.exam.id}`">分配老师</router-link>
        </td>
        <td>{{ formatStatus(em.exam.status) }}</td>
      </tr>
    </table>

    <!-- <button>
      <router-link to="/alloc">分配</router-link>
    </button> -->
    <addexambutton />
  </div>
</template>

<script>
import bus from "@/util/Bus";
import { getExams } from "@/main/api/Main";
import { getExamDetails } from "@/main/api/Main";
export default {
  components: {
    addexambutton: () => import("./admin/AddExamButton")
  },
  data: () => ({
    isAdmin: false,
    exams: [
      {
        id: null,
        name: null,
        beginTime: null,
        endTime: null,
        numbersOfTeacher: null
      }
    ],
    examDetails: [
      {
        exam: {
          id: null,
          name: null,
          beginTime: null,
          endTime: null
        },
        userlist: [
          {
            id: null,
            name: null
          }
        ]
      }
    ]
  }),
  computed: {
    formatStatus() {
      return data => {
        if (data == 0) {
          return "未分配";
        } else if (data == 1) {
          return "已分配";
        } else if (data == 2) {
          return "已结束";
        }
      };
    }
  },
  created() {
    getExams();
    getExamDetails();
    bus.$on(bus.examDetails, data => {
      this.examDetails = data;
    });
    bus.$on(bus.exams, data => {
      this.exams = data;
    });
    bus.$on(bus.isAdmin, data => {
      this.isAdmin = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.exams);
    bus.$off(bus.examDetails);
  }
};
</script>

<style></style>
