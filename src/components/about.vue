<template>
  <div>
    <div class="section-distance">
      <div class="special-title h2 m-2">
        <span class="special-title">個人小檔案</span>
      </div>
      <div>
        <div class="m-0">
          <div class="col-2 d-inline-block align-middle"></div>
          <div class="col-sm-3 d-inline-block align-middle">
            <div class="text-center">
              <img
                class="psPhoto img-fluid center-block"
                src="../assets/img/personal/bighead.png"
                alt
              />
            </div>
          </div>
          <div
            id="aboutMe"
            class="col-sm-5 d-inline-block align-middle text-left"
          >
            <div class="row special-text-border-small">
              <div class="col-md-2 font-weight-bold">姓名</div>
              <div class="col-md-6">
                李正治
                <div>ALEX DEE CHENG ZHI</div>
              </div>
            </div>
            <div class="row special-text-border-small">
              <div class="col-md-2 font-weight-bold">國籍</div>
              <div class="col-md-4">
                馬來西亞
                <a href="https://goo.gl/maps/K2KXdg7U95tfJiSF7" target="_blank">
                  <i class="clickable fas fa-search-location"></i>
                </a>
              </div>
            </div>
            <div class="row special-text-border-small">
              <div class="col-md-2 font-weight-bold">生日</div>
              <div class="col-md-6">96 年 12 月 02日</div>
            </div>
            <div class="row special-text-border-small">
              <div class="col-md-2 font-weight-bold">職業</div>
              <div class="col-md-6">
                <div class="justify-content-center">
                  <vue-typed-js
                    :strings="[
                      '政大資管大四學生',
                      '網頁前端工程師',
                      '平面設計師'
                    ]"
                    :loop="true"
                  >
                    <div class="header-title">
                      <span class="typing header-title-typing"></span>
                    </div>
                  </vue-typed-js>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-2 font-weight-bold">社群</div>
              <div class="col-md-4">
                <div class="row m-0">
                  <div class="ml-2 mr-2">
                    <a
                      href="https://www.facebook.com/adchengzhi7"
                      target="_blank"
                    >
                      <i class="fab fa-facebook-square"></i>
                    </a>
                  </div>
                  <div class="ml-2 mr-2">
                    <a
                      class="youtube"
                      href="https://www.youtube.com/channel/UCM1Cj2DMIMHa4uAxY2yJr2g?view_as=subscriber"
                      target="_blank"
                    >
                      <i class="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h2 m-2">
      <span class="special-text-border special-title">我都會些什麽呢？</span>
    </div>
    <div class="row m-0 align-items-center pt-3 mb-5">
      <skill></skill>
    </div>
    <div>
      <div class="h2 m-2  pt-5 mb-4">
        <span
          class="special-text-border special-title"
          style="font-weight: 100;"
          >平常都在忙些什麽呢？</span
        >
      </div>
      <div class="row m-0 align-items-center mb-5">
        <div class="col-sm-12 col-md-3">
          <div class="h2">
            <span class="special-text-border special-title">網頁設計作品</span>
          </div>
          <div class="d-flex justify-content-center">
            <div class="swiper-button-prev m-2" slot="button-prev">
              <span style="font-size:1.5rem">
                <i class="fas fa-arrow-left"></i>
              </span>
            </div>
            <div class="swiper-button-next m-2" sxlot="button-next">
              <span style="font-size:1.5rem">
                <i class="fas fa-arrow-right"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-8">
          <swiper></swiper>
        </div>
      </div>

      <div class="text-center pt-5 mb-5">
        <div class="h2">
          <span class="special-text-border special-title">平面設計作品</span>
        </div>
        <div class="col-sm-12">
          <graphic></graphic>
        </div>
      </div>

      <div class="h2 m-2 pt-5 mb-3">
        <span
          class="special-text-border special-title"
          style="font-weight: 100;"
          >有空的時候我也喜歡做些...</span
        >
      </div>
      <div class="text-center mb-5">
        <div class="h2 mb-3">
          <span class="special-text-border special-title ">影音剪輯作品</span>
        </div>

        <gallery></gallery>
      </div>
    </div>
  </div>
</template>
<script>
import swiper from "@/components/ele-swiper";
import graphic from "@/components/about-graphicDesign";
import skill from "@/components/ele-skill";
import gallery from "@/components/video";
export default {
  components: {
    swiper,
    graphic,
    gallery,
    skill
  }
};
</script>
<style scoped>
/* // Small devices (landscape phones, 576px and up) */
@media (max-width: 575.98px) {
  .h2 {
    font-size: 1.5rem !important;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .psPhoto {
    max-width: 100px !important;
    max-height: 200px !important;
    overflow: hidden !important;
  }
  .h2 {
    font-size: 1.5rem !important;
  }
}
/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .psPhoto {
    max-width: 200px !important;
    max-height: 300px !important;
    overflow: hidden !important;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .psPhoto {
    max-width: 300px !important;
    max-height: 600px !important;
    overflow: hidden !important;
  }
}

#aboutMe {
  font-size: 1.2rem;
}
#aboutMe .row {
  margin: 20px 0px;
}
.youtube {
  color: red;
}
.youtube:hover {
  color: darkred;
}
.swiper-button-next,
.swiper-button-prev {
  position: relative;
  right: auto;
  left: auto;
  background: none;
}
</style>
