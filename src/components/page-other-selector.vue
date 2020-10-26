<template>
  <div>
    <card :section="section"></card>
  </div>
</template>

<script>
import card from "@/components/ele-card-link";

export default {
  name: "App",

  components: {
    card
  },
  data() {
    return {
      section: [
        {
          id: 0,
          name: "政大商學院抽籤工具",
          photo: "../../static/img/other/random/randomNum.png",
          descb: "隨機抽籤程式",
          link: "https://www.alexdee.ml/1224/index.html",
          hashtag: [
            {
              id: "lg1",
              name: "JavaScript"
            },
            {
              id: "lg2",
              name: "HTML"
            },
            {
              id: "lg3",
              name: "CSS"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped></style>
