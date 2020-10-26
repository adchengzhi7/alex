<template>
  <div class="col-11 mx-auto">
    <div class="section-distance">
      <div class="md-display-1 special-title">電子EDM</div>
      <div class="md-subheading">電子賀卡，FB粉專宣傳設計</div>
    </div>

    <div>
      <div
        class="col-sm-12 col-md-4 p-0 d-inline-block edmsize m-1 rounded"
        :key="index"
        v-for="(item, index) in obj"
      >
        <div class="see" @click="openGallery(index)">
          <i style="font-size: 5em;margin-top:25%;" class="fas fa-eye"></i>
        </div>
        <transition>
          <img v-lazy="item.src || item.thumb" />
        </transition>
      </div>
      <LightBox
        ref="lightbox"
        :media="obj"
        :images="obj"
        :show-caption="true"
        :show-light-box="false"
      />
    </div>
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
            folder: "edm",
            locate: "graphicDesign"
          })
        )
        .then(function(response) {
          // Success
          vm.obj = response.data;
          console.log(vm.obj);
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
  max-width: 320px;
  max-height: 220px;
  overflow: hidden;
}
</style>
