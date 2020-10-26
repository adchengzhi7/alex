<template>
  <div class="col-11 mx-auto">
    <div class="section-distance">
      <div class="md-display-1 special-title">活動系列</div>
      <div class="md-subheading">個大小型活動宣傳海報各類文宣品</div>
    </div>
    <div>
      <div
        class="col-sm-12 col-md-6 p-0 d-inline-block edmsize m-1 rounded"
        :key="index"
        v-for="(item, index) in obj"
      >
        <div class="see" @click="openGallery(index)">
          <i style="font-size: 5em;margin-top:25%;" class="fas fa-eye"></i>
        </div>
        <img v-lazy="item.src || item.thumb" />
      </div>
    </div>
    <LightBox
      ref="lightbox"
      :media="obj"
      :images="obj"
      :show-caption="true"
      :show-light-box="false"
    />
  </div>
</template>

<script>
import Qs from "qs";
import LightBox from "vue-image-lightbox";

export default {
  name: "App",
  components: {
    LightBox
  },
  data() {
    return {
      obj: null
    };
  },
  mounted() {
    this.getGrapicEvent();
  },
  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index);
    },
    getGrapicEvent() {
      var vm = this;
      this.axios
        .post(
          "https://www.alexdee.ml/static/php/getGrapicEvent.php",
          Qs.stringify({
            folder: "compress",
            locate: "graphicDesign"
          })
        )
        .then(function(response) {
          // Success
          vm.obj = response.data;
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }
};
</script>
<style scoped>
.edmsize {
  max-width: 600px;
  max-height: 900px;
  overflow: hidden;
}
</style>
