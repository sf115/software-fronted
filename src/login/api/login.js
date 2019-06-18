import axios from "@/util/MyAxios";

export function login(user) {
  axios.post("/login", user).then(response => {
    let token = response.headers["token"];
    // 此处role用来判断主页是否要显示添加课程的按钮（管理员才可以）
    let role = response.headers["role"];
    let uid = response.headers["uid"];
    if (token != null) {
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("role", role);
      sessionStorage.setItem("uid", uid);
      //alert(uid);
      window.location.href = "./index.html";
    }
  });
}
