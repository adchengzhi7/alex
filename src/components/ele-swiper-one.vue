<template>
  <md-card>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide :key="index" v-for="(image,index) in this.images">
          <img class="img-fluid" :src="image.src" alt />
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>

        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </md-card-media>
  </md-card>
</template>
<script>
export default {
  props: ["images"],
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: {}
};
</script>
<style scoped>
.md-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09);
}
</style>
