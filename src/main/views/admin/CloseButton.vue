<template>
  <div>
    <button @click="close">关闭</button>
  </div>
</template>

<script>
export default {
  props: ["task"],
  methods: {
    close() {
      alert(this.task.title);
      this.task.isLocked = 1;
      this.task.title = "changed";
    }
  }
};
</script>

<style></style>
