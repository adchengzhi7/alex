<template>
  <div>
    <card :section="section"></card>
  </div>
</template>
<script>
import card from "@/components/ele-card";

export default {
  data() {
    return {
      section: [
        {
          id: 0,
          name: "活動系列",
          photo:
            "../../static/img/graphicDesign/compress/EMBA校友會：EMBATalk.jpg",
          descb: "個大小型活動宣傳海報各類文宣品",
          route: "event"
        },
        {
          id: 2,
          name: "宣傳海報",
          photo: "../../static/design/poster.jpg",
          descb: "個大小型活動宣傳海報",
          route: "poster"
        },
        {
          id: 3,
          name: "網頁UI",
          photo: "../../static/design/web.jpg",
          descb: "網頁基礎 UI 與 UX",
          route: "webUi"
        },
        {
          id: 4,
          name: "簡報排版",
          photo: "../../static/design/ppt.jpg",
          descb: "資訊結構化、圖像化",
          route: "ppt"
        },
        {
          id: 5,
          name: "電子EDM",
          photo: "../../static/design/edm.jpg",
          descb: "電子賀卡，FB粉專宣傳設計",
          route: "edm"
        }
      ]
    };
  },
  components: {
    card
  }
};
</script>
<style scoped></style>
