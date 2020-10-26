<template>
  <div>
    <pageTemplate>
      <router-view></router-view>
    </pageTemplate>
  </div>
</template>

<script>
import pageTemplate from "@/components/page-template.vue";

export default {
  name: "App",

  components: {
    pageTemplate
  }
};
</script>
<style scoped>
</style>
