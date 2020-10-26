<template>
  <div class="footers">
    <div class="container">
      <b-row align-v="center">
        <b-col sm="12" md="4">
          <img class="mt-3 mb-3 img-fluid" src="../assets/logo.png" alt />
        </b-col>
        <b-col sm="12" md="8">
          <b-link>
            <router-link class="links" to="webDevelopment"
              >網頁開發作品</router-link
            >
          </b-link>
          <b-link>
            <router-link class="links" to="graphicDesign"
              >平面設計作品</router-link
            >
          </b-link>
          <b-link class="links">影音剪輯作品</b-link>
          <b-link class="links">其他</b-link>
        </b-col>
      </b-row>
      <hr />

      <div class="row m-0 text-center">
        <div class="col-md-12">
          <div class="mb-4">
            <a href="https://www.facebook.com/adchengzhi7" class="pl-0 pr-3">
              <span style="font-size: 1.5em; color:white">
                <i class="fab fa-facebook-square"></i>
              </span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCM1Cj2DMIMHa4uAxY2yJr2g?view_as=subscriber"
              class="pl-3 pr-3"
            >
              <span style="font-size: 1.5em;color:white">
                <i class="fab fa-youtube-square"></i>
              </span>
            </a>
            <a href="#" @click.prevent="sendEmail" class="pl-3 pr-3">
              <span style="font-size: 1.5em;color:white">
                <i class="fas fa-envelope-square"></i>
              </span>
            </a>
          </div>

          <p>Copyright © {{ getDate }} All rights reserved</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  computed: {
    sendEmail() {
      window.open("mailto:adchengzhi7@gmail.com");
    },
    getDate() {
      var d = new Date();
      var n = d.getFullYear();
      return n;
    }
  }
};
</script>
<style scoped>
.links {
  color: #fff !important;
}
.links:hover {
  text-decoration: none;
  color: grey;
}
p {
  color: #fff;
  font-weight: 100;
}
a {
  color: white;
  padding: 2px 10px;
}
.footers {
  background-color: #007bff;
  color: white;
}
</style>
