<template>
  <div>
    <div class="text-left">
      <div class="content-sectionA" id="about">
        <div class="text-center">
          <span class="h3 special-title">專案簡介</span>
        </div>
        <div class="row m-0">
          <div class="col mt-3"></div>
          <div class="col-12 col-lg-5 mt-3 p-0">
            <swiperOne :images="images"></swiperOne>
          </div>
          <div class="col-12 col-lg-5 mt-3 content-body">
            <div class="section-distance text-center">
              <div class="md-display-1 special-title">
                政大馬來西亞同學會
                <a target="_blank" href="http://nccumalaysian.ml/">
                  <md-icon class="fas fa-external-link-alt"></md-icon>
                </a>
              </div>
              <div class="md-subheading">
                活動官網、餐點結賬POS系統、候位管理系統
              </div>
            </div>
            <div class="md-body-1">
              <div>
                &emsp;&emsp;此專案是為了在校社團活動而開發，使其購買流程更加順暢，且節省人力資源。透過了解動線，洽詢使用者，
                著手開發以網頁為基礎的POS結帳系統以及簡易候位叫號系統。
              </div>
            </div>
          </div>
          <div class="col mt-3"></div>
        </div>
      </div>

      <div>
        <div class="section-distance-middle text-center">
          <span class="h3 special-title">開發內容</span>
        </div>

        <div class="row m-0 pb-4">
          <div class="col mt-3"></div>
          <div class="col-12 col-lg-5 mt-3 p-0">
            <swiperOne :images="imagesDisplay"></swiperOne>
          </div>
          <div class="col-12 col-lg-5 mt-3 content-body">
            <div class="md-body-1">
              <div class="h5 special-title">活動官網 | 展示組織與商品資訊</div>
              <div>
                活動官網以相簿的方式展示關於社團的活動照片、影片以及商品資訊。活動團隊只需專注在如何從IG、FB的使用者導流到官網，使用者便可一次掌握關於活動的所有資訊。
              </div>
              <br />
              <div class="h5 special-title">餐點結賬POS系統</div>
              <div>
                設計外場點餐計算、內場依單出餐、線上候位、及後台簡易報表統計，使活動進行更加順暢。
              </div>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>
      <div class="section-distance-bottom">
        <hr />
        <div class="row m-0 pb-4">
          <div class="col mt-3"></div>
          <div class="col-12 col-lg-8 mt-3">
            <md-chip
              class="md-caption p-0"
              md-clickable
              v-for="(hashtag, index) in this.hashtag"
              :key="'tech' + index"
              >#{{ hashtag }}</md-chip
            >
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swiperOne from "./ele-swiper-one";
import pageTemplate from "@/components/page-template.vue";

export default {
  name: "App",
  data() {
    return {
      hashtag: [
        "PHP",
        "MYSQL",
        "HTML5",
        "CSS3",
        "JQUREY",
        "JAVASCRIPT",
        "RWD",
        "BOOTSTRAP"
      ],

      images: [
        {
          src: "../../static/img/webDesign/nccumalaysia/MR-01.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/MR-01-01.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/MR-01-02.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/MR-01-03.jpg"
        }
      ],
      imagesDisplay: [
        {
          src: "../../static/img/webDesign/nccumalaysia/display/MR-display1.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/display/MR-display2.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/display/MR-display3.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/display/MR-display4.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/display/MR-display5.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/display/MR-display6.jpg"
        }
      ],
      imagesCount: [
        {
          src: "../../static/img/webDesign/nccumalaysia/count/MR-count1.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/count/MR-count2.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/count/MR-count3.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/count/MR-count4.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/count/MR-count5.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/count/MR-count6.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/count/MR-count7.jpg"
        }
      ],
      imagesCall: [
        {
          src: "../../static/img/webDesign/nccumalaysia/call/MR-call1.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/call/MR-call2.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/call/MR-call3.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/call/MR-call4.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/call/MR-call5.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/call/MR-call6.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/call/MR-call7.jpg"
        }
      ],
      imagesAdmin: [
        {
          src: "../../static/img/webDesign/nccumalaysia/admin/MR-admin1.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/admin/MR-admin2.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/admin/MR-admin3.jpg"
        },
        {
          src: "../../static/img/webDesign/nccumalaysia/admin/MR-admin4.jpg"
        }
      ]
    };
  },

  components: {
    pageTemplate,
    swiperOne
  }
};
</script>
<style lang="scss" scoped>
img {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.content-sectionA {
  background: #f8f8f8;
  padding: 24px 0;
}
.row {
  display: flex;
  align-items: center;
  justify-content: center;
}
.section-distance-middle {
  padding: 38px 0px 32px 0px;
}
.section-distance-bottom {
  margin-bottom: 32px;
  background: #f8f8f8;
}
.adobe {
  width: 50px;
  box-shadow: none;
}
.content-body {
  background: #f8f8f8;
  padding: 16px;
}
</style>
