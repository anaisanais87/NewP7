<template>
  <div id="app">
    <router-view></router-view>
    <!-- <homePage></homePage> -->
  </div>
</template>

<script>
// import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  // components: {
  //   'homePage': HomePage
  // }
}
</script>

<style>

@font-face {
  font-family: "nevis";
  src: url("./fonts/nevis-Bold.eot");
  src: url("./fonts/nevis-Bold.eot?#iefix") format("embedded-opentype"), url("./fonts/nevis-Bold.woff2") format("woff2"), url("./fonts/nevis-Bold.woff") format("woff"), url("./fonts/nevis-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

html body {
  margin: 0;
  padding: 0;
}

</style>
