<template>
  <div class="menu-header">
    <router-link to="/">
      <img src="../assets/icon-left-font-monochrome-black.svg" class="logo" />
    </router-link>

    <div class="account" v-if="isLoggedIn">
      <div v-on:click.prevent="showDropDown = !showDropDown">
        <div class="my-account">
          <img src="../assets/user_icon.svg" width="25px" />Mon Compte
          <span></span>
        </div>
      </div>

      <div v-if="!showDropDown" class="menu-burger">
        <ul>
          <router-link to="/UpdateProfile"><li>Paramètres</li></router-link>
          <li @click="logout">Déconnexion</li>
        </ul>
      </div>
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

  data() {
    return {
      showDropDown: true,
      email: "",
      password: "",
    };
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },

  methods: {
    logout: function () {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style>

.my-account {
  cursor: pointer;
  color: #ff8a80;
  font-size: 22px;
}

.my-account img {
  margin-right: 6px;
}
.menu-header {
  background: #4b79a1;
  background: -webkit-linear-gradient(to right, #283e51, #4b79a1);
  background: linear-gradient(to right, #283e51, #4b79a1);
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 3% 3% 1% 3%;
}

.logo {
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
  /* font-family: "nevis"; */
  color: #ff8a80;
  list-style: none;
  padding: 14px 7px 14px 7px;
  margin-top: -15%;
}

.menu-burger {
  height: 20px;
  width: 20px;
  position: relative;
  float: left;
  margin-left: -25px;
  margin-top: 8px;
  cursor: pointer;
}

.menu-burger li {
  font-size: 20px;
  width: 200px;
  padding-left: 20px;
  background-color: #4b779e;
  border: 1.5px solid #283e51;
  
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
  .logo {
    width: 210px;
    margin-top: 3%;
  }
}

@media screen and (min-width: 530px) {
  .logo {
    width: 235px;
    margin-top: 2%;
  }

  li {
    font-size: 24px;
  }

  .menu-burger {
    margin-top: 12px;
  }
}

@media screen and (min-width: 749px) {
  .logo {
    margin-top: 1%;
  }
  li {
    padding: 14px 10px 14px 10px;
  }

  .menu-burger {
    margin-top: 14px;
  }
}

@media screen and (min-width: 938px) {
  .logo {
    width: 255px;
    margin-top: -1%;
  }
  li {
    margin-top: -18%;
    padding: 14px 16px 14px 16px;
  }

  .menu-burger {
    margin-top: 15px;
  }
  .register {
    margin-top: -21%;
  }
}

@media screen and (min-width: 992px) {
  .logo {
    width: 275px;
    margin-top: -2%;
  }
  li {
    font-size: 26px;
  }
  .menu-burger {
    margin-top: 20px;
  }
}
</style>