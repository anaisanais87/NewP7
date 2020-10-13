<template>
  <!-- <div id="app">
    <router-view></router-view>
  </div> -->

      <div id="app">
        <div id="nav">
          <!-- <router-link to="/">HomePage</router-link> | -->
          
          <!-- <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
          <span v-else> | <router-link to="/login">Login</router-link></span> -->
        </div>
        <router-view/>
      </div>

</template>

<script>
// import HomePage from './components/HomePage.vue'

// export default {
//   name: 'App',
// }
export default {
      computed: {
        isLoggedIn: function() {
          return this.$store.getters.isLoggedIn;
        }
      },
      methods: {
        logout: function() {
          this.$store.dispatch("logout").then(() => {
            this.$router.push("/LoginUser");
          });
        }
      }
    };

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
