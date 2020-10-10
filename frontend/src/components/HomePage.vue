<template>
  <div class="home">

      <headerPage></headerPage>

    <div class="description">

      <h1>Bienvenue sur votre communauté Groupomania</h1>
      <img src="../assets/groupe1.jpg" class="groupe-photo" />

      <div class="cart-description">
        <router-link to="/RegisterUSer">
          <button class="accessActu">
            <p>Partager et d'échanger avec tous vos collaborateurs !</p>
            <img src="../assets/fleche1.svg" />
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
  src: url("../fonts/Montserrat-ExtraBold.eot");
  src: url("../fonts/Montserrat-ExtraBold.eot?#iefix")
      format("embedded-opentype"),
    url("../fonts/Montserrat-ExtraBold.woff2") format("woff2"),
    url("../fonts/Montserrat-ExtraBold.woff") format("woff"),
    url("../fonts/Montserrat-ExtraBold.ttf") format("truetype");
  font-weight: 800;
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
  src: url("../fonts/Montserrat-MediumItalic.eot");
  src: url("../fonts/Montserrat-MediumItalic.eot?#iefix")
      format("embedded-opentype"),
    url("../fonts/Montserrat-MediumItalic.woff2") format("woff2"),
    url("../fonts/Montserrat-MediumItalic.woff") format("woff"),
    url("../fonts/Montserrat-MediumItalic.ttf") format("truetype");
  font-weight: 500;
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

h1 {
  font-size: 36px;
  color: #192a48;
  text-align: center;
  margin-top: 0;
  padding-top: 14%;
  margin-bottom: 10%;
  font-weight: bold;
}

.description {
  height: 720px;
  width: auto;
}

.groupe-photo {
  display: block;
  margin: auto;
  width: 440px;
  margin-bottom: 14%;
}

.accessActu img {
  width: 20px;
  margin-top: 35px;
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

.accessActu p {
  text-align: left;
}

.accessActu:hover {
  transform: scale(1.05);
  transition-duration: 400ms;
}
</style>
