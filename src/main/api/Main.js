import axios from "@/util/MyAxios";
import bus from "@/util/Bus";

export function getExams() {
  axios.get("/exams").then(response => {
    setTimeout(() => {
      bus.$emit(bus.exams, response.data.exams);
      console.log(response.data.exams);
    }, 200);
  });
}
export function postExam(data) {
  axios.post("admin/invigilation/exams", data.exam).then(response => {
    getExamDetails();
    setTimeout(() => {
      bus.$emit(bus.exams, response.data.exams);
      //console.log("send exams");
    }, 200);
  });
}
export function getUserStatus(data) {
  axios.get(`/admin/invigilation/exam_details/${data.eid}`).then(response => {
    setTimeout(() => {
      console.log(response.data.conflictUsers);
      console.log(response.data.availableUser);
      bus.$emit(bus.conflictUsers, response.data.conflictUsers);
      bus.$emit(bus.availableUser, response.data.availableUser);
    }, 200);
  });
}
export function allocate(data) {
  axios
    .post(`/admin/invigilation/exam_details/${data.eid}`, data.users)
    .then(response => {
      console.log(response.data);
      alert("分配成功");
      history.go(-1);
    });
}
export function getMain() {
  axios.get("/main").then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.courses, response.data.courses);
      bus.$emit(bus.user, response.data.user);
    }, 200);
  });
}
export function getUsers() {
  axios.get("/admin/UserList").then(response => {
    setTimeout(() => {
      bus.$emit(bus.users, response.data.userList);
    }, 200);
  });
}
export function postUser(data) {
  axios.post("admin/users", data.user).then(response => {
    alert("添加成功！");
    console.log(response.data.users);
    setTimeout(() => {
      bus.$emit(bus.users, response.data.users);
    }, 200);
  });
}
export function getUser(data) {
  axios.get(`/admin/users/${data.uid}`).then(response => {
    setTimeout(() => {
      console.log(response.data.user);
      bus.$emit(bus.user, response.data.user);
    }, 200);
  });
}
export function patchUser(data) {
  axios.patch(`/admin/users/${data.uid}`, data.user).then(() => {
    alert("修改成功！");
    getUsers();
    history.go(-1);
  });
}
export function getTasks() {
  axios.get("/admin/tasks").then(response => {
    setTimeout(() => {
      console.log(response.data.tasks);
      bus.$emit(bus.tasks, response.data.tasks);
    }, 200);
  });
}
export function postTask(data) {
  axios.post("/admin/tasks", data.task).then(response => {
    console.log(response.data.tasks);
    setTimeout(() => {
      bus.$emit(bus.tasks, response.data.tasks);
    }, 200);
  });
}
export function getTask(data) {
  axios.get(`/admin/tasks/${data.tid}`).then(response => {
    setTimeout(() => {
      bus.$emit(bus.task, response.data.task);
    }, 200);
  });
}
export function patchTask(data) {
  axios.patch(`/admin/tasks/${data.tid}`, data.task).then(() => {
    alert("修改成功！");
    getTasks();
    history.go(-1);
  });
}
export function allocateTask(data) {
  axios.post(`/admin/tasks/${data.tid}`, data.users).then(response => {
    console.log(response.data);
    alert("分配成功");
    history.go(-1);
  });
}
export function getMyTasks(data) {
  axios.get(`/users/${data.uid}/tasks`).then(response => {
    console.log(response.data);
    setTimeout(() => {
      bus.$emit(bus.taskDetails, response.data.taskDetails);
    }, 200);
  });
}
export function getResponses(data) {
  axios.get(`tasks/${data.tid}/taskDetails`).then(response => {
    console.log(response.data.taskDetails);
    setTimeout(() => {
      bus.$emit(bus.taskDetails2, response.data.taskDetails);
    }, 200);
  });
}
export function getTaskDetail(data) {
  axios.get(`/users/${data.uid}/tasks/${data.tid}`).then(response => {
    console.log(response.data.taskDetail);
    setTimeout(() => {
      bus.$emit(bus.taskDetail, response.data.taskDetail);
    }, 200);
  });
}
export function responseTask(data) {
  axios
    .patch(`/users/${data.uid}/tasks/${data.tid}`, data.taskDetail)
    .then(() => {
      alert("回复成功！");
      history.go(-1);
    });
}
export function getExamDetails() {
  axios.get("/exam_details").then(response => {
    console.log(response.data.examDetailList);
    setTimeout(() => {
      bus.$emit(bus.examDetails, response.data.examDetailList);
    }, 200);
  });
}
export function getUserExam(data) {
  axios.get(`user_examlist/${data.uid}`).then(response => {
    console.log(response.data.examlist);
    setTimeout(() => {
      bus.$emit(bus.exams, response.data.examlist);
    }, 200);
  });
}
export function getMyInfo(data) {
  axios.get(`/users/${data.uid}`).then(response => {
    console.log(response.data.user);
    setTimeout(() => {
      bus.$emit(bus.user, response.data.user);
    }, 200);
  });
}
export function patchMyInfo(data) {
  axios.patch(`/users/${data.uid}`, data.user).then(() => {
    alert("修改成功！");
    getMyInfo(data.id);
    history.go(-1);
  });
}
export function getUsableUser(data) {
  axios.get(`/admin/tasks/${data.tid}/users`).then(response => {
    console.log(response.data.userList);
    setTimeout(() => {
      bus.$emit(bus.users, response.data.userList);
    }, 200);
  });
}
