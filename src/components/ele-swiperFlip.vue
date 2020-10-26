    <template>
  <div class="row m-0">
    <div class="col"></div>
    <div class="col-sm-12 col-md-8">
      <md-card>
        <md-card-media>
          <!-- swiper -->
          <swiper :options="swiperOption">
            <swiper-slide>
              <img class="img-fluid" src="../assets/webDesign/MS-01.jpg" alt />
            </swiper-slide>
            <swiper-slide>
              <img class="img-fluid" src="../assets/webDesign/PF-01.jpg" alt />
            </swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </md-card-media>
      </md-card>
    </div>
    <div class="col-sm-12 col-md-3">
      <div class="h3">
        <span class="special">{{this.title[0]}}</span>
        {{this.title[1]}}
      </div>
    </div>
  </div>
</template>
    <script>
export default {
  props: ["title", "classes"],
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
</style>
