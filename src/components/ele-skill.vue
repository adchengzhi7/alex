<template>
  <div class="col-sm-12 col-md-10 mx-auto">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
      integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
      crossorigin="anonymous"
    />
    <div class="row m-0">
      <div class="col"></div>
      <md-card class="col-sm-12 col-md-4 p-0 m-2">
        <md-card-area>
          <md-card-header>
            <div class="md-title special-title">
              <i class="fas fa-draw-polygon" style="font-size:1.5rem"></i>
              設計工具
            </div>
          </md-card-header>

          <md-card-content>
            <div class="row mt-3 mb-3">
              <div class="col"></div>
              <div class="col-sm-3 rwdCenter text-right">排版設計</div>
              <div class="col-sm-6 rwdCenter text-left">
                <img class="adobe" src="../assets/img/logo/illustrator.svg" alt srcset />
                <img class="adobe" src="../assets/img/logo/lightroom.svg" alt srcset />
                <img class="adobe" src="../assets/img/logo/photoshop.svg" alt srcset />
                <img class="adobe" src="../assets/img/logo/indesign.svg" alt srcset />
              </div>
              <div class="col"></div>
            </div>
            <div class="row mt-3 mb-3">
              <div class="col"></div>
              <div class="col-sm-3 rwdCenter text-right">影音剪輯</div>
              <div class="col-sm-6 rwdCenter text-left">
                <img class="adobe" src="../assets/img/logo/premiere.svg" alt srcset />
                <img class="adobe" src="../assets/img/logo/after-effects.svg" alt srcset />
                <img class="adobe" src="../assets/img/logo/animate.svg" alt srcset />
              </div>
              <div class="col"></div>
            </div>
            <div class="row mt-3 mb-3">
              <div class="col"></div>
              <div class="col-sm-3 rwdCenter text-right">網頁設計</div>
              <div class="col-sm-6 rwdCenter text-left">
                <img class="adobe" src="../assets/img/logo/experience.svg" alt srcset />
              </div>
              <div class="col"></div>
            </div>
          </md-card-content>
        </md-card-area>
      </md-card>

      <md-card class="col-sm-12 col-md-4 p-0 m-2">
        <md-card-area>
          <md-card-header>
            <div class="md-title special-title">
              <i class="fas fa-code" style="font-size:1.5rem"></i> 程式語言
            </div>
          </md-card-header>

          <md-card-content>
            <div class="row mt-3 mb-3">
              <div class="col"></div>
              <div class="col-sm-3 rwdCenter text-right">前端開發</div>
              <div class="col-sm-6 rwdCenter text-left">
                <i class="fab fa-html5" style="font-size:2rem"></i>
                <i class="fab fa-css3-alt" style="font-size:2rem"></i>
                <i class="fab fa-js" style="font-size:2rem"></i>
                <i class="fab fa-vuejs" style="font-size:2rem"></i>
              </div>
              <div class="col"></div>
            </div>
            <div class="row mt-3 mb-3">
              <div class="col"></div>
              <div class="col-sm-3 rwdCenter text-right">後端開發</div>
              <div class="col-sm-6 rwdCenter text-left">
                <i class="fab fa-php" style="font-size:2rem"></i>
                <img class="adobe" src="../assets/img/logo/mysql.svg" alt srcset />
              </div>
              <div class="col"></div>
            </div>
            <div class="row">
              <div class="col"></div>
              <div class="col-sm-3 rwdCenter text-right">其他</div>
              <div class="col-sm-6 rwdCenter text-left">
                <i class="fab fa-java" style="font-size:2rem"></i>
                <i class="fab fa-python" style="font-size:2rem"></i>
              </div>
              <div class="col"></div>
            </div>
          </md-card-content>
        </md-card-area>
      </md-card>

      <div class="col"></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.adobe {
  width: 29px;
}
</style>
