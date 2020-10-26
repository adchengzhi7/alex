<template>
  <div id="app">
    <navbar></navbar>
    <headers></headers>
    <about></about>
    <footers></footers>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import headers from "@/components/header";
import about from "@/components/about";
import footers from "@/components/footer";
export default {
  name: "App",
  components: {
    navbar,
    headers,
    about,
    footers
  }
};
</script>

<style>
</style>
