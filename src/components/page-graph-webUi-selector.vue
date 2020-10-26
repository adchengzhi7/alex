
<template>
  <div>
    <div>
      <card :section="section"></card>
    </div>
  </div>
</template>

<script>
import card from "@/components/ele-card2";
export default {
  name: "App",

  data() {
    return {
      section: [
        {
          id: 0,
          photo: "../../static/img/graphicDesign/webUi/top-bg2.png",
          route: "jom"
        }
      ]
    };
  },
  components: {
    card
  }
};
</script>
<style scoped>
</style>