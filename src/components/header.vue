<template>
  <div class="header">
    <div class="mt-5 mb-3">
      <img class="logo-size" src="../assets/logo-big.png" alt />
    </div>
    <div class="row m-0 justify-content-center">
      <vue-typed-js
        :strings="['學生', '網頁前端工程師', '平面設計師']"
        :loop="true"
      >
        <div class="header-title">
          我是
          <span
            class="typing header-title-typing special-text-border special-title"
          ></span>
        </div>
      </vue-typed-js>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.header {
  /* background: url("../assets/bg-top.jpg");
  background-repeat: no-repeat;
  background-size: cover; */
  background: rgba(0, 123, 255, 0.2);
  padding: 50px 0;
}
.header-title {
  font-size: 2.5rem;
  font-weight: 500;
}
.header-title-typing {
  font-weight: 500;
  z-index: 2;
  font-size: 2.5rem;
}
.logo-size {
  width: 50%;
}

@media (max-width: 575.98px) {
}

/* // Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {
  .header-title {
    font-size: 1.5rem;
    font-weight: 500;
  }
  .header-title-typing {
    font-weight: 500;
    color: #007bff;
    font-size: 1.5rem;
  }
  .logo-size {
    width: 75%;
  }
}

/* // Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) {
}

/* // Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) {
}
</style>
