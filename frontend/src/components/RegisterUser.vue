<template>
  <div class="user_register">
    <div class="authentification" v-if="newLogin">
      <img src="../assets/icon-above-font1.png" width="300" />

      <div class="form-auth">
        <form class="my_form">
          <p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              v-bind:value="email"
              v-on:input="email = $event.target.value"
            />
          </p>

          <p>
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              required
              v-bind:value="password"
              v-on:input="password = $event.target.value"
            />
          </p>
          <p>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              required
              v-bind:value="username"
              v-on:input="username = $event.target.value"
            />
          </p>
          <p>
            <textarea
              name="bio"
              id="bio"
              placeholder="Description"
              v-bind:value="bio"
              v-on:input="bio = $event.target.value"
            />
          </p>
        </form>
      </div>

      <button
        type="submit"
        value="S'inscrire"
        class="btn-auth"
        @click="register(email, password, username, bio)"
      > S'inscrire
      </button>

      <div class="new-auth">
        <p>
          Déjà inscrit&nbsp;?<span class="btn-register" @click="loginPage">
            S'identifier</span>
        </p>
      </div>
    </div>

    <div v-if="login">
      <loginUser></loginUser>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LoginUser from "./LoginUser";

export default {
  name: "RegisterUser",

  data() {
    return {
      newLogin: true,
      login: false,
      email: "",
      password: "",
      username: "",
      bio: "",
      urlData: null,
    };
  },

  components: {
    "loginUser": LoginUser,
  },

  methods: {

    loginPage: function () {
      (this.newLogin = false), (this.login = true);
    },

    register: function (email, password, username, bio) {
      axios
        .post("http://localhost:3000/api/users/register/", {
          email: email,
          password: password,
          username: username,
          bio: bio,
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

.form-auth textarea {
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