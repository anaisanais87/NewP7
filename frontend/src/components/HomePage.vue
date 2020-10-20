<template>
  <div class="home-page">
    <headerPage></headerPage>

    <div class="description">
      <h1>Bienvenue sur votre communauté Groupomania</h1>
      <img src="../assets/groupe1.jpg" class="img-homePage" />

      <div class="cart-description"  v-if="isLoggedIn">
        <router-link to="/WallActu">
          <button class="accessActu">
            <p>Partager et d'échanger avec tous vos collaborateurs !</p>
            <img src="../assets/fleche1.svg" class="arrow" />
          </button>
        </router-link>
      </div>

      <div class="cart-description"  v-else>
        <router-link to="/RegisterUSer">
          <button class="accessActu">
            <p>Partager et d'échanger avec tous vos collaborateurs !</p>
            <img src="../assets/fleche1.svg" class="arrow" />
          </button>
        </router-link>
      </div>

    </div>

    <footerPage></footerPage>
  </div>
</template>


<script>
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";

export default {
  name: "HomePage",

  components: {
    headerPage: HeaderPage,
    footerPage: FooterPage,
  },

  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
};
</script>


<style>
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

@font-face {
  font-family: "Montserrat";
  src: url("../fonts/Montserrat-Bold.eot");
  src: url("../fonts/Montserrat-Bold.eot?#iefix") format("embedded-opentype"),
    url("../fonts/Montserrat-Bold.woff2") format("woff2"),
    url("../fonts/Montserrat-Bold.woff") format("woff"),
    url("../fonts/Montserrat-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Montserrat";
  src: url("../fonts/Montserrat-BoldItalic.eot");
  src: url("../fonts/Montserrat-BoldItalic.eot?#iefix")
      format("embedded-opentype"),
    url("../fonts/Montserrat-BoldItalic.woff2") format("woff2"),
    url("../fonts/Montserrat-BoldItalic.woff") format("woff"),
    url("../fonts/Montserrat-BoldItalic.ttf") format("truetype");
  font-weight: bold;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Montserrat";
  src: url("../fonts/Montserrat-Italic.eot");
  src: url("../fonts/Montserrat-Italic.eot?#iefix") format("embedded-opentype"),
    url("../fonts/Montserrat-Italic.woff2") format("woff2"),
    url("../fonts/Montserrat-Italic.woff") format("woff"),
    url("../fonts/Montserrat-Italic.ttf") format("truetype");
  font-weight: normal;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Montserrat";
  src: url("../fonts/Montserrat-Regular.eot");
  src: url("../fonts/Montserrat-Regular.eot?#iefix") format("embedded-opentype"),
    url("../fonts/Montserrat-Regular.woff2") format("woff2"),
    url("../fonts/Montserrat-Regular.woff") format("woff"),
    url("../fonts/Montserrat-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

* {
  font-family: "Montserrat";
}

.description {
  height: 745px;
  width: auto;
}

.description h1 {
  font-size: 38px;
  color: #192a48;
  text-align: center;
  margin-top: 0;
  padding-top: 14%;
  margin-bottom: 12%;
  font-weight: bold;
}

.img-homePage {
  display: block;
  margin: auto;
  width: 440px;
  margin-bottom: 14%;
}

.accessActu {
  background-color: #eeeeee;
  width: 400px;
  font-size: 20px;
  display: flex;
  margin: auto;
  margin-top: 4%;
  padding: 6px 16px 6px 16px;
  border-radius: 8px;
  box-shadow: 5px 5px 5px#192A48;
  color: #192a48;
  font-weight: bold;
  border: solid #192a48 0.5px;
  cursor: pointer;
}

.arrow {
  width: 20px;
  margin-top: 35px;
}

.accessActu p {
  text-align: left;
}

.accessActu:hover {
  transform: scale(1.05);
  transition-duration: 400ms;
}

@media screen and (min-width: 480px){
  .description {
    height: 738px;
  }

  .description h1 {
    padding-top: 10%;
  }
  .img-homePage {
    width: 530px;
  }

  .accessActu {
    width: 500px;
    margin-top: -2%;
  }
}

@media screen and (min-width: 530px){
  .description {
    height: 734px;
  }

  .description h1 {
    padding-top: 8%;
    margin-bottom: 8%;
  }
  .img-homePage {
    width: 580px;
  }

  .accessActu {
    width: 550px;
    margin-top: -5%;
    font-size: 22px;
  }
}

@media screen and (min-width: 589px){
  .description {
    height: 732px;
  }
}

@media screen and (min-width: 629px){
  .description {
    height: 730px;
  }

  .description h1 {
    padding-top: 6%;
    margin-bottom: 6%;
  }
  .img-homePage {
    width: 620px;
  }

  .accessActu {
    width: 580px;
    margin-top: -6%;
  }
}

@media screen and (min-width: 679px){
  .description {
    height: 728px;
  }

  .description h1 {
    margin-bottom: 4%;
  }
  .img-homePage {
    width: 660px;
  }

  .accessActu {
    width: 620px;
    margin-top: -8%;
    font-size: 22px;
  }
}

@media screen and (min-width: 709px){
  .description {
    height: 726px;
  }
}

@media screen and (min-width: 749px){
  .description {
    height: 723px;
  }
  .description h1 {
    padding-top: 5%;
    font-size: 42px;
    margin-bottom: 3%;
  }
  .img-homePage {
    width: 700px;
  }
  .accessActu {
    width: 620px;
    margin-top: -10%;
    font-size: 22px;
    padding: 1px 16px 1px 16px;
  }
}

@media screen and (min-width: 809px) {
  .description {
    height: 721px;
  }
}

@media screen and (min-width: 848px) {
  .description {
    height: 719px;
  }
  .description h1 {
    padding-top: 4%;
    font-size: 44px;
  }
  .img-homePage {
    width: 740px;
  }
  .accessActu {
    width: 640px;
    margin-top: -10%;
  }
}

@media screen and (min-width: 889px) {
  .description {
    height: 717px;
  }
  .description h1 {
    padding-top: 4%;
    font-size: 46px;
    margin-bottom: 3%;
  }
  .img-homePage {
    width: 740px;
  }
  .accessActu {
    width: 650px;
    margin-top: -11%;
    font-size: 22px;
    padding: 0px 16px 0px 16px;
  }
}

@media screen and (min-width: 938px) {
  .description {
    height: 714px;
  }
  .description h1 {
    font-size: 47px;
  }
  .img-homePage {
    width: 770px;
    height: 350px;
  }
  .accessActu {
    width: 690px;
  }
  .arrow {
  margin-top: 27px;
  margin-left: 10px;
  }
}

@media screen and (min-width: 951px) {
  .description h1 {
    font-size: 48px;
  }
  .accessActu {
    width: 710px;
  }
  .arrow {
  margin-top: 27px;
  margin-left: 40px;
  }
}

@media screen and (min-width: 973px) {
  .description h1 {
    font-size: 49px;
  }
}

@media screen and (min-width: 989px) {
  .description {
    height: 712px;
  }
}

@media screen and (min-width: 992px) {
  .description h1 {
    padding-top: 4%;
    font-size: 47px;
    margin-bottom: 4%;
  }
  .accessActu {
    margin-top: -10%;
  }
}
@media screen and (min-width: 1029px) {
  .description {
    height: 708px;
  }
}

@media screen and (min-width: 1110px) {
  .description {
    height: 706px;
  }
}
@media screen and (min-width: 1139px) {
  .description {
    height: 708px;
  }
}
@media screen and (min-width: 1162px) {
  .description {
    height: 715px;
  }
}

@media screen and (min-width: 1224px) {
  .description {
    height: 750px;
  }
}




</style>
