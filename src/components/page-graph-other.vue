<template>
  <div class="col-11 mx-auto">
    <div class="section-distance">
      <div class="md-display-1 special-title">其他</div>
    </div>
    <div
      class="col-sm-12 col-md-4 p-0 d-inline-block"
      :key="'event' + index"
      v-for="(item, index) in obj"
    >
      <div class="see" @click="showImg(item.dir, item.name)">
        <i style="font-size: 5em;margin-top:25%;" class="fas fa-eye"></i>
      </div>
      <transition>
        <img v-lazy="item.src || item.thumb" />
      </transition>
    </div>
  </div>
</template>

<script>
import Qs from "qs";

export default {
  name: "App",
  data() {
    return {
      obj: null,

      section: [
        {
          id: 0,
          name: "政大馬來西亞同學會",
          photo: "../../static/design/MS-01.jpg",
          descb: "餐點結賬POS系統、候位管理系統",
          link: "/webDevelopment/nccuMalaysian",
          route: "nccuMalaysian"
        },
        {
          id: 2,
          name: "馬六甲培風中學 ",
          link: "/webDevelopment/payfonginTaiwan",
          photo: "../../static/design/PF-01.jpg",
          route: "payfonginTaiwan",
          descb: "會員管理系統、文案管理系統"
        },
        {
          id: 3,
          name: "揪來微信貸",
          photo: "../../static/design/JL-01.jpg",
          link: "/webDevelopment/jomCredit",
          descb: "新創借貸平台",
          route: "jomCredit"
        },
        {
          id: 0,
          name: "政大馬來西亞同學會",
          photo: "../../static/design/MS-01.jpg",
          descb: "餐點結賬POS系統、候位管理系統",
          link: "/webDevelopment/nccuMalaysian",
          route: "nccuMalaysian"
        },
        {
          id: 2,
          name: "馬六甲培風中學 ",
          link: "/webDevelopment/payfonginTaiwan",
          photo: "../../static/design/PF-01.jpg",
          route: "payfonginTaiwan",
          descb: "會員管理系統、文案管理系統"
        },
        {
          id: 3,
          name: "揪來微信貸",
          photo: "../../static/design/JL-01.jpg",
          link: "/webDevelopment/jomCredit",
          descb: "新創借貸平台",
          route: "jomCredit"
        }
      ]
    };
  },
  mounted() {
    this.getGrapicEvent();
  },
  methods: {
    showImg(url, name) {
      this.$swal({
        title: name,
        imageUrl: url,
        imageWidth: "100%",
        imageAlt: "A tall image"
      });
    },
    getGrapicEvent() {
      var vm = this;
      this.axios
        .post(
          "https://www.alexdee.ml/static/php/getGrapicEvent.php",
          Qs.stringify({
            folder: "payfong"
          })
        )
        .then(function(response) {
          // Success
          vm.obj = response.data;
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }
};
</script>
<style scoped></style>
