<template>
  <div class="col-12 col-md-10 mx-auto">
    <div class="row m-0">
      <div class="col-sm-12 col-md-6 col-lg-4 mt-2 mb-2" :key="item.id" v-for="item in section">
        <md-card class="card-expansion" md-with-hover>
          <router-link :to="{ name: item.route }">
            <div class="see">
              <i style="font-size: 5em;margin-top:25%;" class="fas fa-eye"></i>
            </div>
          </router-link>
          <md-card-media-cover md-text-scrim>
            <md-card-media md-ratio="4:3">
              <img :src="item.photo" alt="Skyscraper" />
            </md-card-media>

            <md-card-area>
              <md-card-header>
                <span class="md-title special-title">
                  <span class="special-text-border-fixed">
                    {{item.name}}
                    <div class="md-subhead">{{item.descb}}</div>
                  </span>
                </span>
              </md-card-header>
            </md-card-area>
          </md-card-media-cover>
        </md-card>
        <div class="mt-2" v-if="item.hashtag">
          <md-chip
            class="md-caption p-0"
            md-clickable
            v-for="hashtag in item.hashtag"
            :key="hashtag.id"
          >#{{hashtag.name}}</md-chip>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["section"],

  data() {
    return {};
  }
};
</script>
<style scoped>
.md-ripple {
  padding: 0 8px !important;
}
.md-chip {
  border-radius: 2px;
}
.card-expansion {
  height: auto;
}
.md-card-content {
  background: rgba(0, 0, 0, 0.5);
}
.md-card {
  vertical-align: top;
}
.see {
  position: absolute;
  z-index: 90;
  color: rgba(255, 255, 255, 0.5);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  opacity: 0;
}
.see:hover {
  opacity: 100;
}
</style>
