<template>
  <div></div>
</template>

<script>
import bus from "@/util/Bus";
export default {
  created() {
    bus.$on(bus.e, data => {
      console.log("error");
      alert(data);
    });
  },
  beforeDestroy() {
    bus.$off(bus.e);
  }
};
</script>
