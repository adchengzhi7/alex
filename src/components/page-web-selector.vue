<template>
  <div>
    <card :section="section"></card>
  </div>
</template>

<script>
import card from "@/components/ele-card";

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
          name: "政大馬來西亞同學會",
          photo: "../../static/design/MS-01.jpg",
          descb: "活動官網、餐點結賬POS系統、候位管理系統",
          link: "/webDevelopment/nccuMalaysian",
          route: "nccuMalaysian",
          hashtag: [
            {
              id: "tech1",
              name: "PHP"
            },
            {
              id: "tech2",
              name: "MYSQL"
            },
            {
              id: "tech3",
              name: "HTML"
            },
            {
              id: "tech3",
              name: "CSS"
            }
          ]
        },
        {
          id: 2,
          name: "培風台灣校友會 ",
          link: "/webDevelopment/payfonginTaiwan",
          photo: "../../static/design/PF-01.jpg",
          route: "payfonginTaiwan",
          descb: "社團官網、會員管理系統、文案管理系統",
          hashtag: [
            {
              id: "tech1",
              name: "PHP"
            },
            {
              id: "tech2",
              name: "MYSQL"
            },
            {
              id: "tech3",
              name: "HTML"
            },
            {
              id: "tech3",
              name: "CSS"
            },
            {
              id: "tech3",
              name: "JQUREY"
            }
          ]
        },
        {
          id: 3,
          name: "揪來微信貸",
          photo: "../../static/design/JL-01.jpg",
          link: "/webDevelopment/jomCredit",
          descb: "新創借貸平台",
          route: "jomCredit",
          hashtag: [
            {
              id: "tech1",
              name: "PHP"
            },
            {
              id: "tech2",
              name: "MYSQL"
            },
            {
              id: "tech3",
              name: "VUE"
            },
            {
              id: "tech3",
              name: "CSS"
            },
            {
              id: "tech3",
              name: "JQUREY"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
</style>



