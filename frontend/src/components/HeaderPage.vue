<template>
  <div class="menu-header">
    <router-link to="/">
      <img
        src="../assets/icon-left-font-monochrome-black.svg"
        class="logo-groupomania"
      />
    </router-link>

    <div class="account" v-if="isLogin">
      <router-link to="/UpdateProfile">
        <p>Mon Compte</p>
      </router-link>
    </div>

    <div class="menu-nav" v-else>
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
</template>

<script>
export default {
  name: "HeaderPage",

  methods: {
    // isLoggedIn: function () {
    //   return this.$store.getters.isLoggedIn;
    // },
  },
};
</script>

<style>
.menu-header {
  background: #4b79a1;
  background: -webkit-linear-gradient(to right, #283e51, #4b79a1);
  background: linear-gradient(to right, #283e51, #4b79a1);
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 3% 3% 1% 3%;
}

.menu-header img {
  cursor: pointer;
  margin-top: 6%;
  width: 170px;
}

a {
  text-decoration: none;
  color: #ff8a80;
}

.menu-nav ul {
  display: flex;
}

li {
  font-size: 20px;
  font-family: "nevis";
  color: #ff8a80;
  list-style: none;
  padding: 14px 7px 14px 7px;
  margin-top: -15%;
}

.register {
  color: #ff8080;
  cursor: pointer;
  margin-top: -18%;
}

.register:hover {
  transform: scale(1.07);
  transition-duration: 400ms;
}

.auth {
  border: solid 1px;
  cursor: pointer;
}

.auth:hover {
  transform: scale(1.07);
  transition-duration: 400ms;
}

.account p {
  font-size: 20px;
  margin-top: 2.5%;
  margin-bottom: 0;
  color: #eeeeee;
  cursor: pointer;
}

@media screen and (min-width: 480px) {
  .menu-header img {
    width: 210px;
    margin-top: 3%;
  }
}

@media screen and (min-width: 530px) {
  .menu-header img {
    width: 235px;
    margin-top: 2%;
  }

  li {
    font-size: 24px;
  }
}

@media screen and (min-width: 749px) {
  .menu-header img {
    margin-top: 1%;
  }
  li {
    padding: 14px 10px 14px 10px;
  }
}

@media screen and (min-width: 938px){
  .menu-header img {
    width: 255px;
    margin-top: -1%;
  }
  li {
    margin-top: -18%;
    padding: 14px 16px 14px 16px;
  }
  .register {
    margin-top: -21%;
  }
}

@media screen and (min-width: 992px) {
.menu-header img {
    width: 275px;
    margin-top: -2%;
  }
  li {
    font-size: 26px;
  }

}
</style>