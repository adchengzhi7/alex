<template>
  <div class="col-11 mx-auto">
    <div class="section-distance">
      <div class="md-display-1 special-title">活動系列</div>
      <div class="md-subheading">個大小型活動宣傳海報各類文宣品</div>
    </div>
    <div class="mb-4" :key="item.title" v-for="item in obj">
      <div class="h4 font-weight-bold">{{ item.title }}</div>
      <div class="row mx-auto justify-content-center">
        <div
          class="edmsize rounded p-0 m-1  "
          :key="index"
          v-for="(subs, index) in item.sub"
        >
          <img
            @click="showImg(subs.src, subs.caption)"
            class="img-fluid"
            v-lazy="subs.src || subs.thumb"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Qs from "qs";
import { HalfCircleSpinner } from "epic-spinners";
export default {
  name: "App",
  components: {
    HalfCircleSpinner
  },
  data() {
    return {
      obj: [
        {
          title: "EMBA校友會：EMBATalk",
          sub: {
            "2": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：EMBATalk/backboard-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：EMBATalk/backboard-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：EMBATalk/backboard-01.jpg",
              caption: "backboard-01"
            },
            "3": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：EMBATalk/backboard-01-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：EMBATalk/backboard-01-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：EMBATalk/backboard-01-01-01.jpg",
              caption: "backboard-01-01-01"
            },
            "4": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：EMBATalk/backboard-01-01-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：EMBATalk/backboard-01-01-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：EMBATalk/backboard-01-01-01-01.jpg",
              caption: "backboard-01-01-01-01"
            },
            "5": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：EMBATalk/EMBA TALK-poster-01-01-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：EMBATalk/EMBA TALK-poster-01-01-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：EMBATalk/EMBA TALK-poster-01-01-01-01.jpg",
              caption: "EMBA TALK-poster-01-01-01-01"
            },
            "6": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：EMBATalk/EMBA TALK-posterRundown-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：EMBATalk/EMBA TALK-posterRundown-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：EMBATalk/EMBA TALK-posterRundown-01-01.jpg",
              caption: "EMBA TALK-posterRundown-01-01"
            },

            "7": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：EMBATalk/EMBA TALK-posterEvent-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：EMBATalk/EMBA TALK-posterEvent-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：EMBATalk/EMBA TALK-posterEvent-01.jpg",
              caption: "EMBA TALK-posterEvent-01"
            }
          }
        },
        {
          title: "政大商學院：教師專業成長",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長/議程海報.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長/議程海報.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長/議程海報.jpg",
              caption: ""
            },
            "2": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長/教師專業成長_指向.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長/教師專業成長_指向.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長/教師專業成長_指向.jpg",
              caption: "_指向"
            },
            "3": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長/教師專業成長_議程1-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長/教師專業成長_議程1-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長/教師專業成長_議程1-01.jpg",
              caption: "_議程1-01"
            },
            "5": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長/教師專業成長.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長/教師專業成長.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長/教師專業成長.jpg",
              caption: ""
            }
          }
        },
        {
          title: "EMBA校友會：創業主班第七期",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第七期/海報.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第七期/海報.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第七期/海報.jpg",
              caption: ""
            },
            "2": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第七期/名牌1.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第七期/名牌1.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第七期/名牌1.jpg",
              caption: "1"
            },
            "3": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第七期/小桌牌-A4.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第七期/小桌牌-A4.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第七期/小桌牌-A4.jpg",
              caption: "-A4"
            },
            "4": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第七期/個人成長年表（21X29X1.7）.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第七期/個人成長年表（21X29X1.7）.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第七期/個人成長年表（21X29X1.7）.jpg",
              caption: "21X29X1.7）"
            },
            "5": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第七期/創7主視覺_確認版.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第七期/創7主視覺_確認版.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第七期/創7主視覺_確認版.jpg",
              caption: "7主視覺_確認版"
            }
          }
        },
        {
          title: "EMBA：2017秋賞戲劇公演",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2017秋賞戲劇公演/NCCU-show-17-fa1 300300-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2017秋賞戲劇公演/NCCU-show-17-fa1 300300-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2017秋賞戲劇公演/NCCU-show-17-fa1 300300-01.jpg",
              caption: "NCCU-show-17-fa1 300300-01"
            },

            "2": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2017秋賞戲劇公演/NCCU-show-17-fa-01-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2017秋賞戲劇公演/NCCU-show-17-fa-01-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2017秋賞戲劇公演/NCCU-show-17-fa-01-01-01.jpg",
              caption: "NCCU-show-17-fa-01-01-01"
            },
            "3": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2017秋賞戲劇公演/NCCU_show_17-menu-三折-02.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2017秋賞戲劇公演/NCCU_show_17-menu-三折-02.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2017秋賞戲劇公演/NCCU_show_17-menu-三折-02.jpg",
              caption: "NCCU_show_17-menu-三折-02"
            },

            "5": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2017秋賞戲劇公演/NCCU_show_17-menu-三折-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2017秋賞戲劇公演/NCCU_show_17-menu-三折-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2017秋賞戲劇公演/NCCU_show_17-menu-三折-01.jpg",
              caption: "NCCU_show_17-menu-三折-01"
            },
            "6": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2017秋賞戲劇公演/NCCU-show-17-fa1200240-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2017秋賞戲劇公演/NCCU-show-17-fa1200240-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2017秋賞戲劇公演/NCCU-show-17-fa1200240-01.jpg",
              caption: "NCCU-show-17-fa1200240-01"
            }
          }
        },
        {
          title: "商學院：仲尼獎",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/第三届仲尼獎_第一場講座橫幅.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/第三届仲尼獎_第一場講座橫幅.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/第三届仲尼獎_第一場講座橫幅.jpg",
              caption: "_第一場講座橫幅"
            },
            "2": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/107-1海報_仲尼獎-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/107-1海報_仲尼獎-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/107-1海報_仲尼獎-01.jpg",
              caption: "107-1海報_仲尼獎-01"
            },
            "3": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/知行合一_教學個案為核心_橫幅.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/知行合一_教學個案為核心_橫幅.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/知行合一_教學個案為核心_橫幅.jpg",
              caption: "_教學個案為核心_橫幅"
            },
            "4": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/仲尼獎分場海報-第二場-01-01-01-01-01-01-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/仲尼獎分場海報-第二場-01-01-01-01-01-01-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/仲尼獎分場海報-第二場-01-01-01-01-01-01-01-01.jpg",
              caption: "-第二場-01-01-01-01-01-01-01-01"
            },
            "5": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/知行合一_教學個案為核心_海報-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/知行合一_教學個案為核心_海報-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/知行合一_教學個案為核心_海報-01.jpg",
              caption: "_教學個案為核心_海報-01"
            },
            "6": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/知行合一_以教學IT為核心-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/知行合一_以教學IT為核心-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/知行合一_以教學IT為核心-01.jpg",
              caption: "_以教學IT為核心-01"
            },
            "7": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/第三届仲尼獎_第一場講座桌牌（有名）.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/第三届仲尼獎_第一場講座桌牌（有名）.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/第三届仲尼獎_第一場講座桌牌（有名）.jpg",
              caption: "_第一場講座桌牌（有名）"
            },
            "8": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/第三届仲尼獎_系列活動Banner(網絡用）.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/第三届仲尼獎_系列活動Banner(網絡用）.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/第三届仲尼獎_系列活動Banner(網絡用）.jpg",
              caption: "_系列活動Banner(網絡用）"
            },
            "9": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/知行合一_教學個案為核心_名牌.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/知行合一_教學個案為核心_名牌.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/知行合一_教學個案為核心_名牌.jpg",
              caption: "_教學個案為核心_名牌"
            },
            "10": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/知行合一_教學個案為核心-01-01-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/知行合一_教學個案為核心-01-01-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/知行合一_教學個案為核心-01-01-01-01.jpg",
              caption: "_教學個案為核心-01-01-01-01"
            },
            "11": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/107-1海報_仲尼獎-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/107-1海報_仲尼獎-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/107-1海報_仲尼獎-01-01.jpg",
              caption: "107-1海報_仲尼獎-01-01"
            },
            "12": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/教發_仲尼獎_0329講座Banner-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/教發_仲尼獎_0329講座Banner-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/教發_仲尼獎_0329講座Banner-01.jpg",
              caption: "_仲尼獎_0329講座Banner-01"
            },
            "13": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/知行合一_教學個案為核心_指向1.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/知行合一_教學個案為核心_指向1.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/知行合一_教學個案為核心_指向1.jpg",
              caption: "_教學個案為核心_指向1"
            },
            "15": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/知行合一_0614議程-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/知行合一_0614議程-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/知行合一_0614議程-01-01.jpg",
              caption: "_0614議程-01-01"
            },
            "16": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/107-1海報_仲尼獎-01-01-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/107-1海報_仲尼獎-01-01-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/107-1海報_仲尼獎-01-01-01-01.jpg",
              caption: "107-1海報_仲尼獎-01-01-01-01"
            },
            "17": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/教發_仲尼獎Banner系列活動.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/教發_仲尼獎Banner系列活動.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：仲尼獎/教發_仲尼獎Banner系列活動.jpg",
              caption: "_仲尼獎Banner系列活動"
            }
          }
        },
        {
          title: "EMBA：2018招說會",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDM-011無qrcode.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDM-011無qrcode.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDM-011無qrcode.jpg",
              caption: "EMBA_招生EDM-011無qrcode"
            },
            "2": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDM-01-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDM-01-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDM-01-01-01.jpg",
              caption: "EMBA_招生EDM-01-01-01"
            },
            "3": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDM-02.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDM-02.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDM-02.jpg",
              caption: "EMBA_招生EDM-02"
            },
            "4": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/三角桌牌-01-01-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/三角桌牌-01-01-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/三角桌牌-01-01-01-01.jpg",
              caption: "-01-01-01-01"
            },
            "5": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/保留席-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/保留席-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/保留席-01-01.jpg",
              caption: "-01-01"
            },
            "6": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDMclass-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDMclass-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDMclass-01.jpg",
              caption: "EMBA_招生EDMclass-01"
            },
            "7": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDM-02-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDM-02-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDM-02-01.jpg",
              caption: "EMBA_招生EDM-02-01"
            },
            "8": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/名牌-01-01-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/名牌-01-01-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/名牌-01-01-01-01.jpg",
              caption: "-01-01-01-01"
            },
            "10": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生banner_頁面_1.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生banner_頁面_1.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生banner_頁面_1.jpg",
              caption: "EMBA_招生banner_頁面_1"
            },
            "11": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDMclass6-6-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDMclass6-6-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDMclass6-6-01.jpg",
              caption: "EMBA_招生EDMclass6-6-01"
            },
            "12": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDM-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDM-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDM-01.jpg",
              caption: "EMBA_招生EDM-01"
            },
            "13": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDMXZ-02.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDMXZ-02.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDMXZ-02.jpg",
              caption: "EMBA_招生EDMXZ-02"
            },
            "14": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDMXZ-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDMXZ-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018招說會/EMBA_招生EDMXZ-01.jpg",
              caption: "EMBA_招生EDMXZ-01"
            }
          }
        },
        {
          title: "EMBA：2018新生始業式",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018新生始業式/EMBA 180X120ol-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018新生始業式/EMBA 180X120ol-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018新生始業式/EMBA 180X120ol-01.jpg",
              caption: "EMBA 180X120ol-01"
            },
            "2": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018新生始業式/EMBA-02.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018新生始業式/EMBA-02.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018新生始業式/EMBA-02.jpg",
              caption: "EMBA-02"
            },

            "3": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018新生始業式/EMBA class-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018新生始業式/EMBA class-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018新生始業式/EMBA class-01.jpg",
              caption: "EMBA class-01"
            },
            "4": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018新生始業式/EMBA 300X400-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018新生始業式/EMBA 300X400-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018新生始業式/EMBA 300X400-01.jpg",
              caption: "EMBA 300X400-01"
            },
            "5": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018新生始業式/EMBA 120X45-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018新生始業式/EMBA 120X45-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018新生始業式/EMBA 120X45-01.jpg",
              caption: "EMBA 120X45-01"
            },
            "6": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018新生始業式/EMBA 900X230ol-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018新生始業式/EMBA 900X230ol-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018新生始業式/EMBA 900X230ol-01.jpg",
              caption: "EMBA 900X230ol-01"
            }
          }
        },
        {
          title: "EMBA：2019新生始業式",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/議程海報A0.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/議程海報A0.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/議程海報A0.jpg",
              caption: "A0"
            },
            "2": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/新生始業式_分組指示牌W45xH120cm_頁面_1.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/新生始業式_分組指示牌W45xH120cm_頁面_1.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/新生始業式_分組指示牌W45xH120cm_頁面_1.jpg",
              caption: "_分組指示牌W45xH120cm_頁面_1"
            },
            "3": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/新生始業式_新生報到驗證處_W360XH120CM.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/新生始業式_新生報到驗證處_W360XH120CM.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/新生始業式_新生報到驗證處_W360XH120CM.jpg",
              caption: "_新生報到驗證處_W360XH120CM"
            },
            "4": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/新生始業式_指示牌_新生報到驗證處 W180XH90_1.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/新生始業式_指示牌_新生報到驗證處 W180XH90_1.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/新生始業式_指示牌_新生報到驗證處 W180XH90_1.jpg",
              caption: "_指示牌_新生報到驗證處 W180XH90_1"
            },
            "5": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/900X230_1.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/900X230_1.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/900X230_1.jpg",
              caption: "900X230_1"
            },
            "7": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/新生始業式_舞台眉幕810X90cm.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/新生始業式_舞台眉幕810X90cm.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/新生始業式_舞台眉幕810X90cm.jpg",
              caption: "_舞台眉幕810X90cm"
            },
            "8": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/TRUSS400X300_2.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/TRUSS400X300_2.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/TRUSS400X300_2.jpg",
              caption: "TRUSS400X300_2"
            },
            "9": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/講台海報W45XH108cm.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/講台海報W45XH108cm.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019新生始業式/講台海報W45XH108cm.jpg",
              caption: "W45XH108cm"
            }
          }
        },
        {
          title: "EMBA：2020領導與團隊",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/領團690X330_2-04.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/領團690X330_2-04.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/領團690X330_2-04.jpg",
              caption: "690X330_2-04"
            },
            "2": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/名牌-02.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/名牌-02.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/名牌-02.jpg",
              caption: "-02"
            },
            "3": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/名牌-03.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/名牌-03.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/名牌-03.jpg",
              caption: "-03"
            },
            "4": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/名牌-04.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/名牌-04.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/名牌-04.jpg",
              caption: "-04"
            },
            "5": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/手冊封面-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/手冊封面-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/手冊封面-01.jpg",
              caption: "-01"
            },
            "6": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/手冊封面-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/手冊封面-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/手冊封面-01-01.jpg",
              caption: "-01-01"
            },
            "7": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/領團690X330_final.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/領團690X330_final.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/領團690X330_final.jpg",
              caption: "690X330_final"
            },
            "8": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/名牌-05.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/名牌-05.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/名牌-05.jpg",
              caption: "-05"
            },
            "10": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/領團600X90_finalOL.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/領團600X90_finalOL.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/領團600X90_finalOL.jpg",
              caption: "600X90_finalOL"
            },
            "11": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/名牌-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/名牌-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/名牌-01.jpg",
              caption: "-01"
            },
            "12": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/手冊封面_高階經營班.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/手冊封面_高階經營班.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/手冊封面_高階經營班.jpg",
              caption: "_高階經營班"
            },
            "13": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/領團690X330_2-02.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/領團690X330_2-02.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/領團690X330_2-02.jpg",
              caption: "690X330_2-02"
            },
            "14": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/領團690X330_2-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/領團690X330_2-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/領團690X330_2-01.jpg",
              caption: "690X330_2-01"
            },
            "15": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/名牌-06.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/名牌-06.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020領導與團隊/名牌-06.jpg",
              caption: "-06"
            }
          }
        },
        {
          title: "商學院：全英文課程教學漫談分享會",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：全英文課程教學漫談分享會/全英文課程教學漫談分享會_談教學與課程經營_指向海報-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：全英文課程教學漫談分享會/全英文課程教學漫談分享會_談教學與課程經營_指向海報-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：全英文課程教學漫談分享會/全英文課程教學漫談分享會_談教學與課程經營_指向海報-01.jpg",
              caption: "_談教學與課程經營_指向海報-01"
            },
            "2": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：全英文課程教學漫談分享會/全英文課程教學漫談分享會_談教學與課程經營-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：全英文課程教學漫談分享會/全英文課程教學漫談分享會_談教學與課程經營-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：全英文課程教學漫談分享會/全英文課程教學漫談分享會_談教學與課程經營-01-01.jpg",
              caption: "_談教學與課程經營-01-01"
            },
            "3": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：全英文課程教學漫談分享會/全英文課程教學漫談分享會_議程-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：全英文課程教學漫談分享會/全英文課程教學漫談分享會_議程-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：全英文課程教學漫談分享會/全英文課程教學漫談分享會_議程-01-01.jpg",
              caption: "_議程-01-01"
            }
          }
        },
        {
          title: "商學院：2018期末餐會",
          sub: {
            "0": {
              src:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/邀請卡_網路卡-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/邀請卡_網路卡-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/邀請卡_網路卡-01.jpg",
              caption: "_網路卡-01"
            },
            "2": {
              src:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/邀請卡-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/邀請卡-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/邀請卡-01.jpg",
              caption: "-01"
            },
            "3": {
              src:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/朱浩民邀請卡_頁面_2.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/朱浩民邀請卡_頁面_2.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/朱浩民邀請卡_頁面_2.jpg",
              caption: "_頁面_2"
            },
            "5": {
              src:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/海報A0.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/海報A0.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/海報A0.jpg",
              caption: "A0"
            },
            "6": {
              src:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/邀請卡-02.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/邀請卡-02.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/邀請卡-02.jpg",
              caption: "-02"
            },
            "7": {
              src:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/A1POSTER2.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/A1POSTER2.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/A1POSTER2.jpg",
              caption: "A1POSTER2"
            },
            "8": {
              src:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/朱浩民邀請卡_頁面_1.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/朱浩民邀請卡_頁面_1.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/朱浩民邀請卡_頁面_1.jpg",
              caption: "_頁面_1"
            },
            "9": {
              src:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/邀請卡_頁面_1.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/邀請卡_頁面_1.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/商學院：2018期末餐會/邀請卡_頁面_1.jpg",
              caption: "_頁面_1"
            }
          }
        },
        {
          title: "EMBA：2019領導與團隊",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團名牌_國金-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團名牌_國金-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團名牌_國金-01.jpg",
              caption: "_國金-01"
            },
            "2": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團手冊_0103OL-華商-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團手冊_0103OL-華商-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團手冊_0103OL-華商-01.jpg",
              caption: "_0103OL-華商-01"
            },
            "3": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團背板600X90_0103-華商-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團背板600X90_0103-華商-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團背板600X90_0103-華商-01.jpg",
              caption: "600X90_0103-華商-01"
            },
            "4": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團名牌_生醫-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團名牌_生醫-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團名牌_生醫-01.jpg",
              caption: "_生醫-01"
            },
            "5": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團名牌_全企-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團名牌_全企-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團名牌_全企-01.jpg",
              caption: "_全企-01"
            },
            "6": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團名牌_華商-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團名牌_華商-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團名牌_華商-01.jpg",
              caption: "_華商-01"
            },
            "7": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團手冊_0103OL-高階-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團手冊_0103OL-高階-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團手冊_0103OL-高階-01.jpg",
              caption: "_0103OL-高階-01"
            },
            "8": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團布條600X90_0103OL-華商-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團布條600X90_0103OL-華商-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團布條600X90_0103OL-華商-01.jpg",
              caption: "600X90_0103OL-華商-01"
            },
            "9": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團布條300X90_0103-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團布條300X90_0103-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團布條300X90_0103-01-01.jpg",
              caption: "300X90_0103-01-01"
            },
            "10": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團背板500X30_0103OL-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團背板500X30_0103OL-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團背板500X30_0103OL-01.jpg",
              caption: "500X30_0103OL-01"
            },
            "12": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團名牌_文科資-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團名牌_文科資-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團名牌_文科資-01.jpg",
              caption: "_文科資-01"
            },
            "13": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團名牌_華商-工作人員-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團名牌_華商-工作人員-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019領導與團隊/領團名牌_華商-工作人員-01.jpg",
              caption: "_華商-工作人員-01"
            }
          }
        },
        {
          title: "商學院：個案編寫工作坊",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：個案編寫工作坊/個案撰寫工作坊_指向 A0-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：個案編寫工作坊/個案撰寫工作坊_指向 A0-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：個案編寫工作坊/個案撰寫工作坊_指向 A0-01-01.jpg",
              caption: "_指向 A0-01-01"
            },
            "2": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：個案編寫工作坊/個案撰寫工作坊橫幅-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：個案編寫工作坊/個案撰寫工作坊橫幅-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：個案編寫工作坊/個案撰寫工作坊橫幅-01.jpg",
              caption: "-01"
            },
            "3": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：個案編寫工作坊/桌牌OL 250X353-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：個案編寫工作坊/桌牌OL 250X353-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：個案編寫工作坊/桌牌OL 250X353-01.jpg",
              caption: "OL 250X353-01"
            },
            "5": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：個案編寫工作坊/個案撰寫工作坊 A0-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：個案編寫工作坊/個案撰寫工作坊 A0-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：個案編寫工作坊/個案撰寫工作坊 A0-01-01.jpg",
              caption: " A0-01-01"
            }
          }
        },
        {
          title: "商學院：政大商學院新進教師座談會",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：政大商學院新進教師座談會/政大商學院新進教師座談會_指向海報.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：政大商學院新進教師座談會/政大商學院新進教師座談會_指向海報.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：政大商學院新進教師座談會/政大商學院新進教師座談會_指向海報.jpg",
              caption: "_指向海報"
            },
            "2": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：政大商學院新進教師座談會/政大商學院新進教師座談會_橫幅.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：政大商學院新進教師座談會/政大商學院新進教師座談會_橫幅.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：政大商學院新進教師座談會/政大商學院新進教師座談會_橫幅.jpg",
              caption: "_橫幅"
            },
            "3": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：政大商學院新進教師座談會/政大商學院新進教師座談會_桌牌.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：政大商學院新進教師座談會/政大商學院新進教師座談會_桌牌.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：政大商學院新進教師座談會/政大商學院新進教師座談會_桌牌.jpg",
              caption: "_桌牌"
            },
            "4": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：政大商學院新進教師座談會/政大商學院新進教師座談會__議程.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：政大商學院新進教師座談會/政大商學院新進教師座談會__議程.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：政大商學院新進教師座談會/政大商學院新進教師座談會__議程.jpg",
              caption: "__議程"
            }
          }
        },
        {
          title: "商學院：教師專業成長工作坊",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長工作坊/政大商學院 教師專業成長工作坊_議程.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長工作坊/政大商學院 教師專業成長工作坊_議程.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長工作坊/政大商學院 教師專業成長工作坊_議程.jpg",
              caption: " 教師專業成長工作坊_議程"
            },
            "3": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長工作坊/政大商學院-教師專業成長工作坊.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長工作坊/政大商學院-教師專業成長工作坊.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長工作坊/政大商學院-教師專業成長工作坊.jpg",
              caption: "-教師專業成長工作坊"
            },
            "4": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長工作坊/政大商學院 教師專業成長工作坊_指向海報-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長工作坊/政大商學院 教師專業成長工作坊_指向海報-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長工作坊/政大商學院 教師專業成長工作坊_指向海報-01.jpg",
              caption: " 教師專業成長工作坊_指向海報-01"
            },
            "5": {
              src:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長工作坊/政大商學院 教師專業成長工作坊_議程1-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長工作坊/政大商學院 教師專業成長工作坊_議程1-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/Perdo：教師專業成長工作坊/政大商學院 教師專業成長工作坊_議程1-01.jpg",
              caption: " 教師專業成長工作坊_議程1-01"
            }
          }
        },
        {
          title: "EMBA校友會：創新迎戰新紀元",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/創新迎戰新紀元_小桌牌A4.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/創新迎戰新紀元_小桌牌A4.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/創新迎戰新紀元_小桌牌A4.jpg",
              caption: "_小桌牌A4"
            },
            "2": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/海報_design FRONT.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/海報_design FRONT.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/海報_design FRONT.jpg",
              caption: "_design FRONT"
            },
            "3": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/創新迎戰新紀元_名牌-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/創新迎戰新紀元_名牌-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/創新迎戰新紀元_名牌-01-01.jpg",
              caption: "_名牌-01-01"
            },
            "4": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/創新迎戰新紀元_名牌-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/創新迎戰新紀元_名牌-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/創新迎戰新紀元_名牌-01.jpg",
              caption: "_名牌-01"
            },
            "5": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/海報單獨0415-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/海報單獨0415-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/海報單獨0415-01.jpg",
              caption: "0415-01"
            },
            "6": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/創新迎戰新紀元_名牌.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/創新迎戰新紀元_名牌.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/創新迎戰新紀元_名牌.jpg",
              caption: "_名牌"
            },
            "7": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/海報單獨0521-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/海報單獨0521-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/海報單獨0521-01.jpg",
              caption: "0521-01"
            },
            "9": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/海報單獨-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/海報單獨-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/海報單獨-01.jpg",
              caption: "-01"
            },
            "10": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/海報單獨0618-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/海報單獨0618-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創新迎戰新紀元/海報單獨0618-01.jpg",
              caption: "0618-01"
            }
          }
        },
        {
          title: "商學院：2019期末餐會",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/商學院：2019期末餐會/海報-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/商學院：2019期末餐會/海報-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/商學院：2019期末餐會/海報-01.jpg",
              caption: "-01"
            },
            "2": {
              src:
                "../../static/img/graphicDesign/serial/商學院：2019期末餐會/2019餐會邀請卡-網絡邀請卡(同仁版）-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/商學院：2019期末餐會/2019餐會邀請卡-網絡邀請卡(同仁版）-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/商學院：2019期末餐會/2019餐會邀請卡-網絡邀請卡(同仁版）-01.jpg",
              caption: "2019餐會邀請卡-網絡邀請卡(同仁版）-01"
            },
            "4": {
              src:
                "../../static/img/graphicDesign/serial/商學院：2019期末餐會/海報流程.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/商學院：2019期末餐會/海報流程.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/商學院：2019期末餐會/海報流程.jpg",
              caption: ""
            }
          }
        },
        {
          title: "EMBA校友會：創業主班第六期",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/創六_背板.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/創六_背板.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/創六_背板.jpg",
              caption: "_背板"
            },
            "2": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/創六_名牌.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/創六_名牌.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/創六_名牌.jpg",
              caption: "_名牌"
            },
            "3": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/結業晚會電子看板2019-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/結業晚會電子看板2019-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/結業晚會電子看板2019-01.jpg",
              caption: "2019-01"
            },
            "4": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/創六_桌牌 170mmX138mm.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/創六_桌牌 170mmX138mm.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/創六_桌牌 170mmX138mm.jpg",
              caption: "_桌牌 170mmX138mm"
            },
            "5": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/展架海報2019-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/展架海報2019-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/展架海報2019-01.jpg",
              caption: "2019-01"
            },
            "6": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/結業晚會大背板.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/結業晚會大背板.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/結業晚會大背板.jpg",
              caption: ""
            },
            "7": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/創六_新生手冊 21X29X1.7.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/創六_新生手冊 21X29X1.7.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/創六_新生手冊 21X29X1.7.jpg",
              caption: "_新生手冊 21X29X1.7"
            },
            "8": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/結業成果發表會 Banner.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/結業成果發表會 Banner.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/結業成果發表會 Banner.jpg",
              caption: " Banner"
            },
            "9": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/創六_海報.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/創六_海報.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/創六_海報.jpg",
              caption: "_海報"
            },
            "10": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/成果發表會海報2019.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/成果發表會海報2019.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/成果發表會海報2019.jpg",
              caption: "2019"
            },
            "11": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/結業典禮2019-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/結業典禮2019-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/結業典禮2019-01.jpg",
              caption: "2019-01"
            },
            "13": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/典禮Banner2019.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/典禮Banner2019.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第六期/典禮Banner2019.jpg",
              caption: "Banner2019"
            }
          }
        },
        {
          title: "EMBA校友會：創業主班第五期",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/結業成發海報.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/結業成發海報.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/結業成發海報.jpg",
              caption: ""
            },
            "2": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/邀請卡—期成果發表會-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/邀請卡—期成果發表會-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/邀請卡—期成果發表會-01.jpg",
              caption: "-01"
            },
            "3": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/邀請卡-01-01-01-01-01-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/邀請卡-01-01-01-01-01-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/邀請卡-01-01-01-01-01-01-01.jpg",
              caption: "-01-01-01-01-01-01-01"
            },
            "4": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/小桌牌 A4-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/小桌牌 A4-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/小桌牌 A4-01-01.jpg",
              caption: " A4-01-01"
            },
            "5": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/結業典禮banner.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/結業典禮banner.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/結業典禮banner.jpg",
              caption: "banner"
            },
            "6": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/大背版 豪丁堡廳(36.6x24 CM)-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/大背版 豪丁堡廳(36.6x24 CM)-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/大背版 豪丁堡廳(36.6x24 CM)-01.jpg",
              caption: " 豪丁堡廳(36.6x24 CM)-01"
            },
            "7": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/結業典禮-01-01-01-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/結業典禮-01-01-01-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/結業典禮-01-01-01-01-01.jpg",
              caption: "-01-01-01-01-01"
            },
            "9": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/小桌牌 A4-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/小桌牌 A4-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/小桌牌 A4-01.jpg",
              caption: " A4-01"
            },
            "10": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/個人成長年表（21X29X1.7-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/個人成長年表（21X29X1.7-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/個人成長年表（21X29X1.7-01.jpg",
              caption: "21X29X1.7-01"
            },
            "11": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/結業發表會背板-01-01-01-01-01-01-01-01-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/結業發表會背板-01-01-01-01-01-01-01-01-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/結業發表會背板-01-01-01-01-01-01-01-01-01-01.jpg",
              caption: "-01-01-01-01-01-01-01-01-01-01"
            },
            "12": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/海報-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/海報-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/海報-01-01.jpg",
              caption: "-01-01"
            },
            "13": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/名牌-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/名牌-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：創業主班第五期/名牌-01.jpg",
              caption: "-01"
            }
          }
        },
        {
          title: "EMBA校友會：永續經營與領導力",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/路燈旗A公板-02.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/路燈旗A公板-02.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/路燈旗A公板-02.jpg",
              caption: "A公板-02"
            },
            "2": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/邀請卡-02-02-02-01-02.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/邀請卡-02-02-02-01-02.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/邀請卡-02-02-02-01-02.jpg",
              caption: "-02-02-02-01-02"
            },
            "3": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/路燈旗A公板-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/路燈旗A公板-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/路燈旗A公板-01.jpg",
              caption: "A公板-01"
            },
            "4": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/邀請卡網絡-02.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/邀請卡網絡-02.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/邀請卡網絡-02.jpg",
              caption: "-02"
            },
            "5": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/Lineedm.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/Lineedm.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/Lineedm.jpg",
              caption: "Lineedm"
            },
            "7": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/Accupass.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/Accupass.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/Accupass.jpg",
              caption: "Accupass"
            },
            "8": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/邀請卡-02-02-02-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/邀請卡-02-02-02-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/邀請卡-02-02-02-01-01.jpg",
              caption: "-02-02-02-01-01"
            },
            "9": {
              src:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/校友會官網-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/校友會官網-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA校友會：永續經營與領導力/校友會官網-01.jpg",
              caption: "-01"
            }
          }
        },
        {
          title: "EMBA：2018秋賞戲劇公演",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/1940X585.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/1940X585.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/1940X585.jpg",
              caption: "1940X585"
            },
            "2": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/900X90秋賞_門口圓柱輸出_10倍-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/900X90秋賞_門口圓柱輸出_10倍-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/900X90秋賞_門口圓柱輸出_10倍-01.jpg",
              caption: "900X90秋賞_門口圓柱輸出_10倍-01"
            },
            "3": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/Untitled-2-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/Untitled-2-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/Untitled-2-01.jpg",
              caption: "Untitled-2-01"
            },
            "4": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/120X300秋賞_視聽館眉目_10倍-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/120X300秋賞_視聽館眉目_10倍-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/120X300秋賞_視聽館眉目_10倍-01.jpg",
              caption: "120X300秋賞_視聽館眉目_10倍-01"
            },
            "5": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/NCCU-show-brochure-18-fa-02.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/NCCU-show-brochure-18-fa-02.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/NCCU-show-brochure-18-fa-02.jpg",
              caption: "NCCU-show-brochure-18-fa-02"
            },
            "6": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/607x192-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/607x192-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/607x192-01.jpg",
              caption: "607x192-01"
            },
            "7": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/NCCU-show-brochure-18-fa-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/NCCU-show-brochure-18-fa-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/NCCU-show-brochure-18-fa-01.jpg",
              caption: "NCCU-show-brochure-18-fa-01"
            },
            "9": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/500x280-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/500x280-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/500x280-01-01.jpg",
              caption: "500x280-01-01"
            },
            "10": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/3F-入口.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/3F-入口.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2018秋賞戲劇公演/3F-入口.jpg",
              caption: "3F-入口"
            }
          }
        },
        {
          title: "EMBA：2019秋賞戲劇公演",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019秋賞戲劇公演/宣傳冊_頁面_2.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019秋賞戲劇公演/宣傳冊_頁面_2.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019秋賞戲劇公演/宣傳冊_頁面_2.jpg",
              caption: "_頁面_2"
            },
            "2": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019秋賞戲劇公演/宣傳冊_頁面_1.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019秋賞戲劇公演/宣傳冊_頁面_1.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019秋賞戲劇公演/宣傳冊_頁面_1.jpg",
              caption: "_頁面_1"
            },
            "3": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019秋賞戲劇公演/拍照背板300X300.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019秋賞戲劇公演/拍照背板300X300.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019秋賞戲劇公演/拍照背板300X300.jpg",
              caption: "300X300"
            },
            "4": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019秋賞戲劇公演/海報指向.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019秋賞戲劇公演/海報指向.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019秋賞戲劇公演/海報指向.jpg",
              caption: ""
            },
            "5": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019秋賞戲劇公演/舞台眉目1200X240.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019秋賞戲劇公演/舞台眉目1200X240.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019秋賞戲劇公演/舞台眉目1200X240.jpg",
              caption: "1200X240"
            },
            "6": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019秋賞戲劇公演/海報禁止飲食.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019秋賞戲劇公演/海報禁止飲食.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019秋賞戲劇公演/海報禁止飲食.jpg",
              caption: ""
            },
            "8": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2019秋賞戲劇公演/入口眉目586X58.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2019秋賞戲劇公演/入口眉目586X58.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2019秋賞戲劇公演/入口眉目586X58.jpg",
              caption: "586X58"
            }
          }
        },
        {
          title: "信義書院：企業倫理教師工作坊",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/信義書院：企業倫理教師工作坊/企業倫理教師工作坊名牌.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/信義書院：企業倫理教師工作坊/企業倫理教師工作坊名牌.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/信義書院：企業倫理教師工作坊/企業倫理教師工作坊名牌.jpg",
              caption: ""
            },
            "2": {
              src:
                "../../static/img/graphicDesign/serial/信義書院：企業倫理教師工作坊/企業倫理教師工作坊Banner.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/信義書院：企業倫理教師工作坊/企業倫理教師工作坊Banner.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/信義書院：企業倫理教師工作坊/企業倫理教師工作坊Banner.jpg",
              caption: "Banner"
            },
            "4": {
              src:
                "../../static/img/graphicDesign/serial/信義書院：企業倫理教師工作坊/企業倫理教師工作坊海報.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/信義書院：企業倫理教師工作坊/企業倫理教師工作坊海報.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/信義書院：企業倫理教師工作坊/企業倫理教師工作坊海報.jpg",
              caption: ""
            },
            "5": {
              src:
                "../../static/img/graphicDesign/serial/信義書院：企業倫理教師工作坊/企業倫理教師工作坊議程.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/信義書院：企業倫理教師工作坊/企業倫理教師工作坊議程.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/信義書院：企業倫理教師工作坊/企業倫理教師工作坊議程.jpg",
              caption: ""
            }
          }
        },
        {
          title: "EMBA：2020招說會",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/名卡-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/名卡-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/名卡-01.jpg",
              caption: "-01"
            },
            "2": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-480x320.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-480x320.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-480x320.jpg",
              caption: "Appier素材製作方針-480x320"
            },
            "3": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-120x600.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-120x600.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-120x600.jpg",
              caption: "Appier素材製作方針-120x600"
            },
            "4": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/展架海報-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/展架海報-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/展架海報-01.jpg",
              caption: "-01"
            },
            "5": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-320x50.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-320x50.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-320x50.jpg",
              caption: "Appier素材製作方針-320x50"
            },
            "6": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/desktop.ini",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/desktop.ini",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/desktop.ini",
              caption: "desktop"
            },
            "7": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-200x200.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-200x200.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-200x200.jpg",
              caption: "Appier素材製作方針-200x200"
            },
            "8": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/FB 廣告.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/FB 廣告.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/FB 廣告.jpg",
              caption: "FB 廣告"
            },
            "9": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-300x600.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-300x600.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-300x600.jpg",
              caption: "Appier素材製作方針-300x600"
            },
            "10": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-160x600.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-160x600.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-160x600.jpg",
              caption: "Appier素材製作方針-160x600"
            },
            "11": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/舞台上方眉目W810X90-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/舞台上方眉目W810X90-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/舞台上方眉目W810X90-01.jpg",
              caption: "W810X90-01"
            },
            "12": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/玉山廳外400X300-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/玉山廳外400X300-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/玉山廳外400X300-01.jpg",
              caption: "400X300-01"
            },
            "13": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-468x60.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-468x60.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-468x60.jpg",
              caption: "Appier素材製作方針-468x60"
            },
            "14": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/FBCover.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/FBCover.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/FBCover.jpg",
              caption: "FBCover"
            },
            "15": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-970x70.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-970x70.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-970x70.jpg",
              caption: "Appier素材製作方針-970x70"
            },
            "16": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-300X250.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-300X250.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-300X250.jpg",
              caption: "Appier素材製作方針-300X250"
            },
            "17": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/FB 廣告1.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/FB 廣告1.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/FB 廣告1.jpg",
              caption: "FB 廣告1"
            },
            "18": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/2020EMBA官網_直-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/2020EMBA官網_直-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/2020EMBA官網_直-01.jpg",
              caption: "2020EMBA官網_直-01"
            },
            "19": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/2020EMBA官網_橫-0930.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/2020EMBA官網_橫-0930.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/2020EMBA官網_橫-0930.jpg",
              caption: "2020EMBA官網_橫-0930"
            },
            "20": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/鋼琴舞台背板-W700XH260-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/鋼琴舞台背板-W700XH260-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/鋼琴舞台背板-W700XH260-01.jpg",
              caption: "-W700XH260-01"
            },
            "22": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-970x250.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-970x250.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-970x250.jpg",
              caption: "Appier素材製作方針-970x250"
            },
            "23": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-336x280.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-336x280.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-336x280.jpg",
              caption: "Appier素材製作方針-336x280"
            },
            "24": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-320x480.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-320x480.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-320x480.jpg",
              caption: "Appier素材製作方針-320x480"
            },
            "25": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-320x100.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-320x100.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-320x100.jpg",
              caption: "Appier素材製作方針-320x100"
            },
            "26": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-250x250.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-250x250.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-250x250.jpg",
              caption: "Appier素材製作方針-250x250"
            },
            "27": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/講台海報-45X108-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/講台海報-45X108-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/講台海報-45X108-01.jpg",
              caption: "-45X108-01"
            },
            "28": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/2019EMBA—大車隊插卡37x24cm-finalOL-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/2019EMBA—大車隊插卡37x24cm-finalOL-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/2019EMBA—大車隊插卡37x24cm-finalOL-01.jpg",
              caption: "2019EMBA—大車隊插卡37x24cm-finalOL-01"
            },
            "29": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/海報-新竹-華商-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/海報-新竹-華商-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/海報-新竹-華商-01.jpg",
              caption: "-新竹-華商-01"
            },
            "30": {
              src:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-728x90.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-728x90.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/EMBA：2020招說會/Appier素材製作方針-728x90.jpg",
              caption: "Appier素材製作方針-728x90"
            }
          }
        },
        {
          title: "企管系：CEO 論壇",
          sub: {
            "1": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/轉型創新放眼大中華校Banner.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/轉型創新放眼大中華校Banner.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/轉型創新放眼大中華校Banner.jpg",
              caption: "Banner"
            },
            "2": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/鴻毛之重海報.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/鴻毛之重海報.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/鴻毛之重海報.jpg",
              caption: ""
            },
            "3": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/鴻毛之重校banne.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/鴻毛之重校banne.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/鴻毛之重校banne.jpg",
              caption: "banne"
            },
            "4": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/透過跨境電商，鏈接全球商機海報.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/透過跨境電商，鏈接全球商機海報.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/透過跨境電商，鏈接全球商機海報.jpg",
              caption: ""
            },
            "5": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/CEO19年主視覺-380X150.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/CEO19年主視覺-380X150.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/CEO19年主視覺-380X150.jpg",
              caption: "CEO19年主視覺-380X150"
            },
            "6": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/轉型創新放眼大中華海報.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/轉型創新放眼大中華海報.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/轉型創新放眼大中華海報.jpg",
              caption: ""
            },
            "7": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/輿情大數據分析產業型態與未來趨勢發展校Banner.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/輿情大數據分析產業型態與未來趨勢發展校Banner.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/輿情大數據分析產業型態與未來趨勢發展校Banner.jpg",
              caption: "Banner"
            },
            "8": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/CEO19年主視覺 80X200-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/CEO19年主視覺 80X200-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/CEO19年主視覺 80X200-01.jpg",
              caption: "CEO19年主視覺 80X200-01"
            },
            "9": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/輿情大數據分析產業型態與未來趨勢發展海報.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/輿情大數據分析產業型態與未來趨勢發展海報.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/輿情大數據分析產業型態與未來趨勢發展海報.jpg",
              caption: ""
            },
            "10": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/CEO19年主視覺 380X150-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/CEO19年主視覺 380X150-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/CEO19年主視覺 380X150-01.jpg",
              caption: "CEO19年主視覺 380X150-01"
            },
            "11": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/轉型創新放眼大中華系.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/轉型創新放眼大中華系.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/轉型創新放眼大中華系.jpg",
              caption: ""
            },
            "12": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/鴻毛之重_系banner.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/鴻毛之重_系banner.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/鴻毛之重_系banner.jpg",
              caption: "_系banner"
            },
            "13": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/透過跨境電商，鏈接全球商機系Banner.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/透過跨境電商，鏈接全球商機系Banner.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/透過跨境電商，鏈接全球商機系Banner.jpg",
              caption: "Banner"
            },
            "14": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/加盟經營校Banner.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/加盟經營校Banner.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/加盟經營校Banner.jpg",
              caption: "Banner"
            },
            "15": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/從明基佳世達價值轉型看台灣希望大未來校Banner.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/從明基佳世達價值轉型看台灣希望大未來校Banner.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/從明基佳世達價值轉型看台灣希望大未來校Banner.jpg",
              caption: "Banner"
            },
            "16": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/加盟經營海報.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/加盟經營海報.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/加盟經營海報.jpg",
              caption: ""
            },
            "17": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/輿情大數據分析產業型態與未來趨勢發展系Banner.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/輿情大數據分析產業型態與未來趨勢發展系Banner.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/輿情大數據分析產業型態與未來趨勢發展系Banner.jpg",
              caption: "Banner"
            },
            "18": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/透過跨境電商，鏈接全球商機校Banner.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/透過跨境電商，鏈接全球商機校Banner.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/透過跨境電商，鏈接全球商機校Banner.jpg",
              caption: "Banner"
            },
            "19": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/企業多角化經營-系.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/企業多角化經營-系.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/企業多角化經營-系.jpg",
              caption: "-系"
            },
            "21": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/從明基佳世達價值轉型看台灣希望大未來系Banner.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/從明基佳世達價值轉型看台灣希望大未來系Banner.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/從明基佳世達價值轉型看台灣希望大未來系Banner.jpg",
              caption: "Banner"
            },
            "22": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/CEO19年主視覺-380X15022-01-01.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/CEO19年主視覺-380X15022-01-01.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/CEO19年主視覺-380X15022-01-01.jpg",
              caption: "CEO19年主視覺-380X15022-01-01"
            },
            "23": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/企業多角化經營.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/企業多角化經營.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/企業多角化經營.jpg",
              caption: ""
            },
            "24": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/加盟經營系Banner.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/加盟經營系Banner.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/加盟經營系Banner.jpg",
              caption: "Banner"
            },
            "25": {
              src:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/CEO19年主視覺-380X1502.jpg",
              thumb:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/CEO19年主視覺-380X1502.jpg",
              srcset:
                "../../static/img/graphicDesign/serial/企管系：CEO 論壇/CEO19年主視覺-380X1502.jpg",
              caption: "CEO19年主視覺-380X1502"
            }
          }
        }
      ]
    };
  },
  mounted() {
    // this.getGrapicEvent();
  },
  methods: {
    showImg(url, name) {
      this.$swal({
        // title: name,
        imageUrl: url,
        imageWidth: "100%"
      });
    },
    getGrapicEvent() {
      var vm = this;
      this.axios
        .post(
          "https://www.alexdee.ml/static/php/getGrapicSerial.php",
          Qs.stringify({
            folder: "serial",
            locate: "graphicDesign"
          })
        )
        .then(function(response) {
          // Success
          vm.obj = response.data;

          console.log(JSON.stringify(vm.obj));
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
