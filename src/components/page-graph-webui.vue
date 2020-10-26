<template>
  <div class="col-12 m-0 p-0">
    <div class="row m-0 mb-3" style="background-color:#D9FFD4;">
      <div class="col-12 p-0">
        <img src="../../static/img/graphicDesign/webUi/top-bg2.png" />
      </div>
    </div>
    <div class="md-display-1 special-title pt-4 pb-2">資料展示</div>
    <div class>
      <!-- <img src="" alt /> -->
      <div class="row m-0 text-center pb-5">
        <div class="col-12 p-0">
          <img
            src="../../static/img/graphicDesign/webUi/dataPresent.png"
            data-loading="../../static/image-loader.gif"
            alt
          />
        </div>
      </div>
    </div>
    <div class="md-display-1 special-title tit pt-4 pb-2">廣告資訊</div>
    <div class="row m-0 text-center">
      <div class="col-12 p-0">
        <img src="../../static/img/graphicDesign/webUi/advPart.png" alt />
      </div>
      <div class="col-4 col-sm-3" style="position: absolute;left:32%;">
        <img
          class="videoPosition2"
          src="../../static/img/graphicDesign/webUi/jom.gif"
        />
      </div>
    </div>

    <div class="md-display-1 special-title pt-4 pb-2">資料收集</div>

    <div class>
      <!-- <img src="" alt /> -->
      <div class="row m-0 text-center pb-5">
        <div class="col-12 p-0">
          <img
            width="100%"
            src="../../static/img/graphicDesign/webUi/dataCollect.png"
            alt
          />
        </div>
      </div>
    </div>
    <div class="md-display-1 special-title tit pt-4 pb-2">工具優化</div>
    <div class="row m-0 text-center">
      <div class="col-12 p-0">
        <img src="../../static/img/graphicDesign/webUi/tools.png" alt />
      </div>
      <div class="col-4 col-sm-3" style="position: absolute;">
        <img
          slot="image"
          class="videoPosition"
          src="../../static/img/graphicDesign/webUi/jom2.gif"
        />

        <!-- 
        <video autoplay loop width="450px" class="videoPosition">
          <source
            src="https://www.alexdee.ml/static/img/graphicDesign/webUi/jom2.mp4 "
            type="video/mp4"
          />
        </video>-->
      </div>
    </div>
  </div>
</template>

<script>
import Qs from "qs";
import VueLoadImage from "vue-load-image";
export default {
  name: "App",
  data() {
    return {
      obj: null
    };
  },
  components: {
    "vue-load-image": VueLoadImage
  },
  methods: {
    showImg(url, name) {
      this.$swal({
        title: name,
        imageUrl: url,
        imageWidth: "100%",
        imageAlt: "A tall image"
      });
    }
  }
};
</script>
<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
}
.tit {
  background-color: #e3ffe0;
  color: #31aa65;
}
.videoPosition {
  position: relative;
  /* top: 88%; */
  left: 14%;
  margin: 15%;
}
.videoPosition2 {
  position: relative;
  margin: 15%;
}
@media (max-width: 575.98px) {
  .md-display-1 {
    font-size: 21px !important;
    line-height: 40px;
  }
}
</style>
