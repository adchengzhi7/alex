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
                培風台灣校友會
                <a target="_blank" href="https://www.payfongintaiwan.org/">
                  <md-icon class="fas fa-external-link-alt"></md-icon>
                </a>
              </div>
              <div class="md-subheading">
                社團官網、會員管理系統、CMS內容管理系統
              </div>
            </div>
            <div class="md-body-1">
              <div>
                &emsp;&emsp;第一個自主獨立開發專案，透過不斷學習修正，我進一步掌握如何架構一個完整的網站，了解前後端的所需開發技能與工具，如：伺服器掛載、設定域名DNS、網頁RWD、PHP發行發信、資料庫CRUD等。
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
              <div class="h5 special-title">社團官網 | 展示社團訊息</div>
              <div>
                社團官網以部落格的方式呈現，並以社團相關資訊、活動資訊、文章等進行分類。提供快速查詢功能，使用者可快速尋找相關個別資訊或文章。
              </div>
              <br />
              <div>
                在網站裡建立了內容管理系統CMS
                、會員系統、透過會員制的方式管理平台使用者。亦有人力資源媒合平台，校友公司可在平台上登記職缺內容，而新鮮人可透過平台搜尋資訊。
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
        "SSL"
      ],

      images: [
        {
          src: "../../static/img/webDesign/payfong/PF-01.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/PF-01-01.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/PF-01-02.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/PF-01-03.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/PF-01-04.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/PF-01-05.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/PF-01-06.jpg"
        }
      ],
      imagesDisplay: [
        {
          src: "../../static/img/webDesign/payfong/display/PF-display1.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/display/PF-display2.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/display/PF-display3.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/display/PF-display4.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/display/PF-display5.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/display/PF-display6.jpg"
        }
      ],
      imagesEdit: [
        {
          src: "../../static/img/webDesign/payfong/edit/PF-edit1.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/edit/PF-edit2.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/edit/PF-edit3.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/edit/PF-edit4.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/edit/PF-edit5.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/edit/PF-edit6.jpg"
        }
      ],
      imagesMember: [
        {
          src: "../../static/img/webDesign/payfong/member/PF-member1.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/member/PF-member2.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/member/PF-member3.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/member/PF-member4.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/member/PF-member5.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/member/PF-member6.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/member/PF-member7.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/member/PF-member8.jpg"
        }
      ],
      imagesJob: [
        {
          src: "../../static/img/webDesign/payfong/job/PF-job1.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/job/PF-job2.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/job/PF-job3.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/job/PF-job4.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/job/PF-job5.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/job/PF-job6.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/job/PF-job7.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/job/PF-job8.jpg"
        }
      ],
      imagesOther: [
        {
          src: "../../static/img/webDesign/payfong/other/PF-other1.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/other/PF-other2.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/other/PF-other3.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/other/PF-other4.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/other/PF-other5.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/other/PF-other6.jpg"
        },
        {
          src: "../../static/img/webDesign/payfong/other/PF-other7.jpg"
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
