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
                揪來微信貸
                <a href="https://www.jomcredit.ml/index.html">
                  <md-icon class="fas fa-external-link-alt"></md-icon>
                </a>
              </div>
              <div class="md-subheading">
                <p style="color:red">已暫停營運，僅供作品展示
                </p>
                會員管理系統、電子簽章系統、通知系統
              </div>
            </div>
            <div class="md-body-1">
              <div>
                &emsp;&emsp;揪來微信貸是我在政大資管系大四的畢業專案，由資管系教授所指導下執行，以新創團隊模式運行。專案期許可以透過平台協助大專院校的同學解決短暫急用資金的需求
                <a href="https://www.jomcredit.com/">官網</a>
                /
                <a href="https://www.jomcredit.com/">粉絲專頁</a>,不在此贅述）。
              </div>
              <br />
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
            <swiperOne :images="imagesMember"></swiperOne>
          </div>
          <div class="col-12 col-lg-5 mt-3 content-body">
            <div class="md-body-1">
              <div class="h5 special-title">專案平台 | 媒合雙方交易</div>
              <div class="mb-3">
                &emsp;&emsp;在專案裡擔任組長與主要開發者。在技術方面，為了因應年輕使用者的體驗上的升級，我們開始參考更多主流的開發方式，更多的接觸：UI/UX、WEBPACK、第三方API、前後端分離等技術。
                在此專案中讓我成長最多的就是團體開發的能力，開始接觸版本控制(SVN、GIT),逐漸開始以元件化方式開發加速開發的效率。
                在資安部分，SSL憑證、系統架構在雲端服務平台、系統用戶的帳戶都需透過hash加密。
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
          src: "../../static/img/webDesign/jomcredit/JL-01.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/JL-01-01.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/JL-01-02.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/JL-01-03.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/JL-01-04.jpg"
        }
      ],
      imagesMember: [
        {
          src: "../../static/img/webDesign/jomcredit/member/JL-member1.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/member/JL-member2.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/member/JL-member3.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/member/JL-member4.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/member/JL-member5.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/member/JL-member6.jpg"
        }
      ],
      imagesCount: [
        {
          src: "../../static/img/webDesign/jomcredit/count/JL-count1.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/count/JL-count2.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/count/JL-count3.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/count/JL-count4.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/count/JL-count5.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/count/JL-count6.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/count/JL-count7.jpg"
        }
      ],
      imagesCall: [
        {
          src: "../../static/img/webDesign/jomcredit/call/JL-call1.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/call/JL-call2.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/call/JL-call3.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/call/JL-call4.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/call/JL-call5.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/call/JL-call6.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/call/JL-call7.jpg"
        }
      ],
      imagesAdmin: [
        {
          src: "../../static/img/webDesign/jomcredit/admin/JL-admin1.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/admin/JL-admin2.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/admin/JL-admin3.jpg"
        },
        {
          src: "../../static/img/webDesign/jomcredit/admin/JL-admin4.jpg"
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
.md-theme-default a:not(.md-button) {
  color: #448aff !important;
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
