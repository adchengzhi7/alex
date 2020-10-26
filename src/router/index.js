import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";

//import page
import home from "@/components/page-home.vue";
import webDevelopment from "@/components/page-web.vue";
import video from "@/components/page-video.vue";
import others from "@/components/page-other.vue";
import graphicDesign from "@/components/page-graph.vue";
import payfong from "@/components/page-web-payfong.vue";
import nccuMalaysian from "@/components/page-web-nccu.vue";
import jomcredit from "@/components/page-web-jomcredit.vue";
import webSelector from "@/components/page-web-selector.vue";
import graphSelector from "@/components/page-graph-selector.vue";
import videoSelector from "@/components/video.vue";
import otherSelector from "@/components/page-other-selector.vue";
import event from "@/components/page-graph-serial.vue";
import poster from "@/components/page-graph-poster.vue";
import webUi from "@/components/page-graph-webui.vue";
import ppt from "@/components/page-graph-ppt.vue";
import edm from "@/components/page-graph-edm.vue";
import other from "@/components/page-graph-other.vue";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "index",
      component: home
    },
    {
      path: "/video",
      name: "video",
      component: video,
      children: [{
        path: "/",
        component: videoSelector
      }]
    },
    {
      path: "/others",
      name: "others",
      component: others,
      children: [{
        path: "/",
        component: otherSelector
      }]
    },
    {
      path: "/webDevelopment",
      name: "webDevelopment",
      component: webDevelopment,
      children: [{
          path: "/",
          component: webSelector
        },
        {
          path: "payfonginTaiwan",
          name: "payfonginTaiwan",
          component: payfong
        },
        {
          path: "nccuMalaysian",
          name: "nccuMalaysian",
          component: nccuMalaysian
        },
        {
          path: "jomCredit",
          name: "jomCredit",
          component: jomcredit
        }
      ]
    },
    {
      path: "/graphicDesign",
      name: "graphicDesign",
      component: graphicDesign,
      children: [{
          path: "/",
          component: graphSelector
        },
        {
          path: "event",
          name: "event",
          component: event
        },
        {
          path: "poster",
          name: "poster",
          component: poster
        },
        {
          path: "webUi",
          name: "webUi",
          component: webUi
        },
        {
          path: "ppt",
          name: "ppt",
          component: ppt
        },
        {
          path: "edm",
          name: "edm",
          component: edm
        },
        {
          path: "other",
          name: "other",
          component: other
        }
      ]
    }
  ]
});
