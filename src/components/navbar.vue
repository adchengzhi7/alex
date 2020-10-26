<template>
  <div>
    <b-navbar class="nav" toggleable="lg" type="light">
      <router-link to="/">
        <img src="../assets/logo.png" alt="Alex" />
      </router-link>

      <b-navbar-toggle target="nav-collapse" class="border-0"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-dropdown
            id="dropdown-header"
            text="個人作品"
            variant="default"
            class="m-2"
            right
          >
            <b-dropdown-header id="dropdown-header-label"
              >網頁開發</b-dropdown-header
            >
            <b-dropdown-item-button
              aria-describedby="dropdown-header-label"
              :key="'weblink' + index"
              v-for="(web, index) in webDevelopment"
            >
              <router-link :to="{ name: web.link }">
                {{ web.name }}
              </router-link>
            </b-dropdown-item-button>
            <b-dropdown-header id="dropdown-header-label2"
              >平面設計</b-dropdown-header
            >
            <b-dropdown-item-button
              aria-describedby="dropdown-header-label"
              :key="'graphlink' + index"
              v-for="(graphicDesign, index) in graphicDesign"
            >
              <router-link :to="{ name: graphicDesign.route }">
                {{ graphicDesign.name }}
              </router-link>
            </b-dropdown-item-button>
            <b-dropdown-header id="dropdown-header-label2">
              <router-link to="video">影音剪輯</router-link>
            </b-dropdown-header>
            <b-dropdown-header id="dropdown-header-label2"
              >其他</b-dropdown-header
            >
            <b-dropdown-item-button aria-describedby="dropdown-header-label">
              <router-link to="/others">小工具</router-link>
            </b-dropdown-item-button>
          </b-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      webDevelopment: [
        {
          key: "web03",
          name: "揪來微信貸",
          link: "jomCredit"
        },
        {
          name: "政大馬來西亞同學會",
          key: "web01",
          link: "nccuMalaysian"
        },
        {
          key: "web02",
          name: "培風台灣校友會",
          link: "payfonginTaiwan"
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
      ]
    };
  }
};
</script>

<style scoped>
img {
  width: 110px;
}
.nav {
  padding: 15px 2%;
  position: fixed;
  width: 100%;
  left: 0;
  z-index: 1005;
  background: #ffffff;
  box-shadow: 4px 0 20px -5px rgba(0, 0, 0, 0.1);
}
.btn-secondary {
  color: #000 !important;
  background-color: #6c757d;
  border-color: #6c757d;
}
</style>
