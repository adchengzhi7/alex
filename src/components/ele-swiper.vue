<template>
  <md-card>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide>
          <router-link :to="{ name: 'nccuMalaysian' }">
            <div class="see">
              <i style="font-size: 5em;margin-top:25%;" class="fas fa-eye"></i>
            </div>
            <img class="img-fluid" src="../assets/webDesign/MR-01.jpg" alt />
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link :to="{ name: 'nccuMalaysian' }">
            <div class="see">
              <i style="font-size: 5em;margin-top:25%;" class="fas fa-eye"></i>
            </div>
            <img class="img-fluid" src="../assets/webDesign/MR-01-01.jpg" alt />
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link :to="{ name: 'payfonginTaiwan' }">
            <div class="see">
              <i style="font-size: 5em;margin-top:25%;" class="fas fa-eye"></i>
            </div>
            <img class="img-fluid" src="../assets/webDesign/PF-01.jpg" alt />
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link :to="{ name: 'payfonginTaiwan' }">
            <div class="see">
              <i style="font-size: 5em;margin-top:25%;" class="fas fa-eye"></i>
            </div>
            <img class="img-fluid" src="../assets/webDesign/PF-01-01.jpg" alt />
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link :to="{ name: 'jomCredit' }">
            <div class="see">
              <i style="font-size: 5em;margin-top:25%;" class="fas fa-eye"></i>
            </div>
            <img class="img-fluid" src="../assets/webDesign/JL-01.jpg" alt />
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link :to="{ name: 'jomCredit' }">
            <div class="see">
              <i style="font-size: 5em;margin-top:25%;" class="fas fa-eye"></i>
            </div>
            <img class="img-fluid" src="../assets/webDesign/JL-01-01.jpg" alt />
          </router-link>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </md-card-media>
  </md-card>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: true,
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
  }
};
</script>
<style scoped>
.md-card {
  box-shadow: none;
}
.see {
  position: absolute;
  z-index: 90;
  color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  opacity: 0;
}
.see:hover {
  opacity: 100;
}
</style>
