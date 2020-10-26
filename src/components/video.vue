<template>
  <div>
    <div class="col-12 col-md-10 mx-auto text-center">
      <div class="row">
        <div
          class="col-xl-4 col-md-6 col-sm-12 mt-1 mb-2"
          :key="item.snippet.title"
          v-for="item in items"
        >
          <div class="videoWrapper">
            <iframe
              width="560"
              height="315"
              :src="yLink(item.snippet.resourceId.videoId)"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";

export default {
  data: function() {
    return {
      items: null,
      youtubeList: [],
      images: [
        {
          title: "#hikingChallange 茶壺山",
          date: "2019年4月4日",
          href: "https://youtu.be/VPWDrlfsrh0",
          type: "text/html",
          youtube: "VPWDrlfsrh0",
          poster: "https://img.youtube.com/vi/VPWDrlfsrh0/maxresdefault.jpg"
        },
        {
          title: "#HikingChallange 象山",
          date: "2019年4月4日",
          href: "https://www.youtube.com/watch?v=BVzz2jNml6s",
          type: "text/html",
          youtube: "BVzz2jNml6s",
          poster: "https://img.youtube.com/vi/BVzz2jNml6s/maxresdefault.jpg"
        },
        {
          title: "A3組 科技與人文社會 大數據與人文社會",
          date: "2019年1月9日",
          href: "https://www.youtube.com/watch?v=Vl13QGUCtdY",
          type: "text/html",
          youtube: "Vl13QGUCtdY",
          poster: "https://img.youtube.com/vi/Vl13QGUCtdY/maxresdefault.jpg"
        },
        {
          title: "KAYA SHOW",
          date: "2018年11月29日",
          href: "https://www.youtube.com/watch?v=IQL-mEhKZbI",
          type: "text/html",
          youtube: "IQL-mEhKZbI",
          poster: "https://img.youtube.com/vi/IQL-mEhKZbI/maxresdefault.jpg"
        },
        {
          title: "Personal Resume",
          date: "2018年10月23日",
          href: "https://www.youtube.com/watch?v=uYwuxA4KqBY",
          type: "text/html",
          youtube: "uYwuxA4KqBY",
          poster: "https://img.youtube.com/vi/uYwuxA4KqBY/maxresdefault.jpg"
        },
        {
          title: "Yangmingshan National Park",
          date: "2018年4月8日",
          href: "https://www.youtube.com/watch?v=o9MqGOw_Heg",
          type: "text/html",
          youtube: "o9MqGOw_Heg",
          poster: "https://img.youtube.com/vi/o9MqGOw_Heg/maxresdefault.jpg"
        }
      ],
      index: null
    };
  },
  computed: {},
  components: {
    gallery: VueGallery
  },
  mounted() {
    this.getYoutube();
  },
  methods: {
    yLink(videoid) {
      var link = "https://www.youtube.com/embed/" + videoid;
      return link;
    },
    getYoutube() {
      var requestOptions = {
        method: "GET",
        redirect: "follow"
      };

      var yotubelist = fetch(
        "https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UUM1Cj2DMIMHa4uAxY2yJr2g&key=AIzaSyCseMjiJZ8648KRKsqqjZ4tBa3J1qXmV1A&part=snippet&maxResults=50",
        requestOptions
      )
        .then(response => response.json())
        .then(result => {
          this.items = result["items"];

          console.log(result);
        })
        .catch(error => console.log("error", error));
    }
  }
};
</script>

<style scoped>
.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: inline-block;
}
.md-card {
  margin: 14px;
  display: inline-block;
  vertical-align: top;
}
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
a:not([href]):not([tabindex]) {
  color: white;
  text-decoration: none;
}
</style>
