<template>
  <div>
    <sidebar></sidebar>
    <div class="row content m-0">
      <div class="col-sm-12 col-md-3 col-lg-2 p-0"></div>
      <div class="col-sm-12 col-md-9 col-lg-10 p-0">
        <slot></slot>
      </div>
    </div>
    <back-to-top bottom="20px" right="90px">
      <button type="button" class="btn btn-custom btn-to-top">
        <i class="fa fa-chevron-up"></i>
      </button>
    </back-to-top>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import sidebar from "@/components/sidebar";
import payfong from "@/components/page-web-payfong.vue";
export default {
  name: "App",

  components: {
    navbar,
    payfong,
    sidebar
  }
};
</script>
<style scoped>
.content {
  position: relative;

  top: 90px;
}
.btn-custom {
  color: #fff;
  background-color: #027cff;
  border-color: #027cff;
}
.btn-to-top {
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}
</style>
