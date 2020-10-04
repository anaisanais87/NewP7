<template>
  <div class="home">
    <div class="homePage" v-if="home">
      <div class="menu-header">
        <img src="../assets/icon-left-font-monochrome-black.svg" width="200"/>

        <div class="menu-nav">
          <nav>
            <ul>
              <li class="register" @click="formRegister">S'inscrire</li>

              <li class="auth" @click="formLogin">S'identifier</li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="description">
        <div class="cart-description">
          <h1>Bienvenue sur votre communauté Groupomania</h1>

          <router-link to="/WallActu">
            <button class="accessActu">Accéder au fil d'actualité</button>
          </router-link>

        </div>
      </div>
      <!-- 

    <div v-if="newsFeed">
      <wallActu></wallActu>
    </div> -->

      <div class="footer">
        <footerPage></footerPage>
      </div>
    </div>

    <div v-if="formRegisterUser">
      <registerUser></registerUser>
    </div>

    <div v-if="formAuth">
      <loginUser></loginUser>
    </div>
  </div>
</template>


<script>
// import WallActu from "./WallActu";
import FooterPage from "./FooterPage";
import LoginUser from "./LoginUser";
import RegisterUser from './RegisterUser'

export default {
  name: "HomePage",

  data() {
    return {
      formAuth: false,
      home: true,
      formRegisterUser: false
      // newsFeed: false
    };
  },

  components: {
    // 'wallActu': WallActu,
    'footerPage': FooterPage,
    'loginUser': LoginUser,
    'registerUser': RegisterUser

  },

  methods: {
    formLogin: function () {
      this.formAuth = true;
      this.home = false;
    },

    formRegister: function() {
      this.formRegisterUser = true;
      this.home = false;
    }

    // wallNews: function () {
    //   // if (userFound)
    //   this.home = false;
    //   this.newsFeed = true;
    // },
  },
};
</script>


<style>

/*Section*/

@font-face {
  font-family: "nevis";
  src: url("../fonts/nevis-Bold.eot");
  src: url("../fonts/nevis-Bold.eot?#iefix") format("embedded-opentype"),
    url("../fonts/nevis-Bold.woff2") format("woff2"),
    url("../fonts/nevis-Bold.woff") format("woff"),
    url("../fonts/nevis-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

a {
  text-decoration: none;
  color: #ff8a80;
}

li {
  font-size: 22px;
  font-family: "nevis";
  color: #ff8a80;
  list-style: none;
  padding: 10px 15px 10px 10px;
  margin-bottom: 1%;
  margin-top: 0;
}

.menu-header {
  background-color: rgba(25, 42, 72, 0.85);
  display: flex;
  justify-content: space-around;
  height: 90px;
}

.menu-nav ul {
  display: flex;
}

.register {
  color: #ff8080;
  cursor: pointer;
}

.register:hover {
  transform: scale(1.15);
  transition-duration: 400ms;
}

.auth {
  border: solid 1px;
  cursor: pointer;
}

.auth:hover {
  transform: scale(1.15);
  transition-duration: 400ms;
}

header img {
  padding-top: 0%;
  margin-bottom: 0%;
}

h1 {
  font-family: "nevis";
  font-size: 44px;
  color: #192a48;
  text-align: center;
  margin-top: 0;
  padding-top: 10%;
  margin-bottom: 10%;
}

.description {
  /* background-color:rgba(174, 174, 176, 0.4); */
  background-image: url(../assets/fond.jpg);
  height: 730px;
  border: solid 1px;
}

.cart-description {
  background-color: rgba(255, 138, 128, 0.6);
  border-radius: 15px;
  height: 350px;
  width: 500px;
  border: solid 1px #192a48;
  margin: auto;
  margin-top: 190px;
}

.description img {
  display: block;
  margin: auto;
}

.cart-description button {
  background-color: rgb(25, 42, 72, 0.6);
  font-size: 24px;
  display: block;
  margin: auto;
  margin-top: 10%;
  padding: 10px 18px 10px 18px;
  border-radius: 8px;
  box-shadow: 5px 5px 5px#192A48;
  font-family: "nevis";
  color: #aeaeb0;
  border: solid #192a48 0.5px;
  cursor: pointer;
}

.accessActu:hover {
  transform: scale(1.15);
  transition-duration: 400ms;
}
</style>
