<template>
  <div class="menu-header">
    <div class="header-visitor" v-if="token != false">
      <router-link to="/">
        <img src="../assets/icon-left-font-monochrome-black.svg" />
      </router-link>

      <div class="menu-nav">
        <nav>
          <ul>
            <router-link to="/RegisterUser">
              <li class="register">S'inscrire</li>
            </router-link>
            <router-link to="/LoginUser">
              <li class="auth">S'identifier</li>
            </router-link>
          </ul>
        </nav>
      </div>
    </div>

    <div class="header-login" v-if="token === true">
      <img
        src="../assets/icon-left-font-monochrome-black.svg"
        width="200"
        class="logo-groupomania"
      />

      <router-link to="/UpdateProfile">
        <p class="my-account">Mon Compte</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderPage",
};
</script>

<style>
a {
  text-decoration: none;
  color: #ff8a80;
}

li {
  font-size: 20px;
  font-family: "nevis";
  color: #ff8a80;
  list-style: none;
  padding: 18px 7px 18px 7px;
  margin-bottom: 1%;
  margin-top: 0;
}

.header-visitor {
  background: #4b79a1;
  background: -webkit-linear-gradient(to right, #283e51, #4b79a1);
  background: linear-gradient(to right, #283e51, #4b79a1);
  display: flex;
  justify-content: space-around;
  height: 90px;
  width: auto;
}

.header-visitor img {
  width: 160px;
  margin-top: 20%;
}

.menu-nav ul {
  display: flex;
}

.register {
  color: #ff8080;
  cursor: pointer;
}

.register:hover {
  transform: scale(1.08);
  transition-duration: 400ms;
}

.auth {
  border: solid 1px;
  cursor: pointer;
}

.auth:hover {
  transform: scale(1.08);
  transition-duration: 400ms;
}

.modif {
  height: auto;
}
.header-login {
  background: #4b79a1;
  background: -webkit-linear-gradient(to right, #283e51, #4b79a1);
  background: linear-gradient(to right, #283e51, #4b79a1);
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 3% 3% 1% 3%;
}

.header-login img {
  cursor: pointer;
}

.my-account {
  font-size: 20px;
  margin-top: 2.5%;
  margin-bottom: 0;
  color: #eeeeee;
  cursor: pointer;
}
</style>