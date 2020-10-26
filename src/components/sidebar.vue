<template>
  <div>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
      integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
      crossorigin="anonymous"
    />

    <navbar></navbar>

    <Slide
      class="smallHide"
      :isOpen="true"
      noOverlay
      disableOutsideClick
      disableEsc
      :crossIcon="false"
      :burgerIcon="false"
      :width="responsive"
    >
      <div class="list">
        <md-list>
          <md-list-item>個人作品</md-list-item>
          <md-list-item md-expand :md-expanded.sync="expandWeb">
            <md-icon class="fas fa-code"></md-icon>

            <span class="md-list-item-text">
              <router-link to="/webDevelopment" exact>
                <span>網頁開發</span>
              </router-link>
            </span>

            <md-list slot="md-expand">
              <md-list-item class="md-inset" :key="web.key" v-for="web in webDevelopment">
                <router-link :to="web.link" exact>
                  <span>{{ web.name }}</span>
                </router-link>
              </md-list-item>
            </md-list>
          </md-list-item>
          <md-list-item md-expand :md-expanded.sync="expandGraph">
            <md-icon class="fas fa-draw-polygon"></md-icon>
            <span class="md-list-item-text">
              <router-link to="/graphicDesign" exact>
                <span>平面設計</span>
              </router-link>
            </span>
            <md-list slot="md-expand">
              <md-list-item
                class="md-inset"
                :key="'graph' + index"
                v-for="(graph, index) in graphicDesign"
              >
                <router-link :to="{ name: graph.route }" exact>
                  <span>{{ graph.name }}</span>
                </router-link>
              </md-list-item>
            </md-list>
          </md-list-item>
          <md-list-item>
            <md-icon class="fab fa-youtube"></md-icon>
            <span class="md-list-item-text">
              <router-link to="/video" exact>
                <span>影音剪輯</span>
              </router-link>
            </span>
            <md-list slot="md-expand"></md-list>
          </md-list-item>
          <md-list-item md-expand :md-expanded.sync="expandOther">
            <md-icon class="fas fa-ellipsis-h"></md-icon>
            <span class="md-list-item-text">其他</span>
            <md-list slot="md-expand">
              <md-list-item class="md-inset">
                <router-link to="/others" exact>
                  <span>小工具</span>
                </router-link>
              </md-list-item>
            </md-list>
          </md-list-item>
        </md-list>
      </div>
    </Slide>
  </div>
</template>
<script>
import { Slide } from "vue-burger-menu"; // import the CSS transitions you wish to use, in this case we are using `Slide`
import navbar from "@/components/navbar";

export default {
  data() {
    return {
      currentPath: null,
      webDevelopment: [
        {
          key: "web03",
          name: "揪來微信貸",
          link: "/webDevelopment/jomCredit"
        },
        {
          name: "政大馬來西亞同學會",
          key: "web01",
          link: "/webDevelopment/nccuMalaysian"
        },
        {
          key: "web02",
          name: "培風台灣校友會",
          link: "/webDevelopment/payfonginTaiwan"
        }
      ],
      graphicDesign: [
        {
          name: "活動系列",
          route: "event"
        },
        {
          name: "宣傳海報",
          route: "poster"
        },
        {
          name: "網頁UI",
          route: "webUi"
        },
        {
          name: "簡報排版",
          route: "ppt"
        },
        {
          name: "電子EDM",
          route: "edm"
        }
        // {
        //   name: "其他",
        //   route: "other"
        // }
      ],
      expandWeb: false,
      expandGraph: false,
      expandVideo: false,
      expandOther: false,
      responsive: "300"
    };
  },
  components: {
    navbar,
    Slide // Register your component
  },
  mounted() {
    this.currentPath = this.$router.currentRoute.path;
    console.log(this.currentPath);

    if (this.currentPath == "/webDevelopment") {
      this.expandWeb = true;
      this.expandGraph = false;
      this.expandVideo = false;
      this.expandOther = false;
    }
    if (this.currentPath == "/graphicDesign") {
      this.expandWeb = false;
      this.expandGraph = true;
      this.expandVideo = false;
      this.expandOther = false;
    }
    if (this.currentPath == "/video") {
      this.expandWeb = false;
      this.expandGraph = false;
      this.expandVideo = true;
      this.expandOther = false;
    }
  }
};
</script>
<style>
.bm-menu {
  background-color: #fff !important;
}
</style>
