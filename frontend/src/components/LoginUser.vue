<template>
  <div class="login">
    <div class="authentification" v-if="register">
      <router-link to="/">
        <img src="../assets/icon-above-font1.png" width="300" />
      </router-link>

      <div class="form-auth">
        <form class="my_form">
          <p>
            <input type="email" name="email" placeholder="Email" required v-bind:value="email" v-on:input="email = $event.target.value"/>
          </p>

          <p>
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              required
              v-bind:value="password" v-on:input="password = $event.target.value"
            />
          </p>
        </form>
      </div>

      <button
        type="submit"
        value="S'identifier"
        class="btn-auth"
        @click="login(email, password)"
      >
        S'identifier
      </button>

      <div class="new-auth">
        <p>
          Nouveau chez Groupomania&nbsp;?
          <span @click="registerPage" class="btn-register">S'incrire</span>
        </p>
      </div>
    </div>

    <div v-if="newRegister">
      <registerUser></registerUser>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import RegisterUser from "./RegisterUser";

export default {
  name: "LoginUser",

  data() {
    return {
      register: true,
      newRegister: false,
      email: "",
      password: "",
      urlData: null,
    };
  },

  components: {
    "registerUser": RegisterUser,
  },

  methods: {
    registerPage: function () {
      this.register = false;
      this.newRegister = true;
    },

    login: function (email, password) {
      axios
        .post("http://localhost:3000/api/users/login/", {
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response);
          this.urlData = response.json;
        });
    },
  },
};
</script>


<style scoped>
/*Authentification*/
.authentification img {
  display: block;
  margin: auto;
  margin-bottom: 5%;
}

.form-auth {
  text-align: center;
  width: 250px;
  border: solid #192a48 1px;
  margin: auto;
  padding: 10% 10% 10% 10%;
  border-radius: 6px;
  background-color: #eeeeee;
  margin-bottom: 10%;
}
.form-auth input {
  font-size: 16px;
  padding: 5% 5% 5% 5%;
  border-radius: 6px;
  border: solid #192a48 1px;
}

.btn-auth {
  margin-left: 6%;
  border-radius: 25px;
  background-color: #192a48;
  font-size: 20px;
  padding: 0.5rem 7.2rem 0.4rem 7.2rem;
  border: 1px solid #192a48;
  color: #eeeeee;
  margin: auto;
  display: block;
  cursor: pointer;
}
.btn-auth:hover {
  transform: scale(1.15);
  transition-duration: 400ms;
}

p {
  font-family: "nevis";
  font-size: 22px;
  color: #192a48;
}

.btn-register {
  color: #fd2d01;
  font-weight: bold;
  cursor: pointer;
}

.new-auth {
  text-align: center;
  font-size: 17px;
  margin-top: 7%;
}

.register {
  text-decoration: none;
  color: #fd2d01;
  font-weight: bold;
}
</style>