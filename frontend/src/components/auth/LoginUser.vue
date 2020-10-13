<template>
  <div class="authentification">
    <router-link to="/">
      <img src="../../assets/icon-above-font1.png" width="300" />
    </router-link>

    <div class="form-auth">
      <form class="my_form" @submit.prevent="login">
        <p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            v-bind:value="email"
            v-on:input="email = $event.target.value"
          />
          <span id='error_mail'></span>
        </p>

        <p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            required
            v-bind:value="password"
            v-on:input="password = $event.target.value"
          />
          <span id='error_password'></span>
        </p>
      </form>
    </div>

    <!-- <button
      type="submit"
      value="S'identifier"
      class="btn-auth"
    >
      S'identifier
    </button> -->

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
        <router-link to="/RegisterUser">
          <span class="btn-register">S'incrire</span>
        </router-link>
      </p>
    </div>
  </div>
</template>


<script>
// import axios from "axios";
// import { mapActions } from 'vuex';
// import vuex from "vuex";

export default {
  name: "LoginUser",

  data() {
    return {
      email: "",
      password: "",
      urlData: null,
      // eslint-disable-next-line no-useless-escape
      regexEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      // eslint-disable-next-line no-useless-escape
      regexPassword: /^(?=.*d).{4,8}$/,
    };
  },

  methods: {

   login: function() {
            let email = this.email;
            let password = this.password;
            this.$store
              .dispatch("login", { email, password })
              .then(() => this.$router.push("/WallActu"))
              .catch(err => console.log(err));
  },

    // login: function (email, password) {
    //   axios
    //     .post("http://localhost:3000/api/users/login/", {
    //       email: email,
    //       password: password,
    //     })
    //     .then((response) => {
    //       console.log(response);
    //       this.urlData = response.json;
    //     })
    //     .then(() => {
    //       this.$router.push("/WallActu")
    //     })
    // },

    validateForm: function() {                                               //Création de la fonction qui permet de valider le formulaire

      // const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;
      
    // let email     = document.getElementById("email").value;     //Déclaration des variables qui font référence aux champs du formulaire
    // let password  = document.getElementById("password").value;
  
    let formSubmit = true;
    

    if (!this.regexEmail.test(this.email)) {                                     //SI la valeur de l'adresse email est différente de la regexEmail alors:

        var messageError = "Format saisi invalide !";           
        document.getElementById("error_mail").textContent = messageError;  //Un message d'erreur s'affiche 
        formSubmit = false;                                                //Et la valeur formSubmit renvoie false

    }

    if (!this.regexPassword.test(this.password))                                     //Je répète l'opération avec toutes les valeurs de tous les champs
        document.getElementById("error_password").textContent = messageError;

    if (formSubmit === true) {                                              //Lorsque formSubmit renvoie true, le formulaire est rempli correctement
        
    }
}

  },
};
</script>


<style scoped>
/*Authentification*/
.authentification img {
  display: block;
  margin: auto;
  margin-top: 10%;
  margin-bottom: 5%;
  cursor: pointer;
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
  box-shadow: 5px 5px 5px #aeaeb0;
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
  /* background-color: #192a48; */
  background: #4b79a1;
  background: -webkit-linear-gradient(to right, #283e51, #4b79a1);
  background: linear-gradient(to right, #283e51, #4b79a1);
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
  font-size: 20px;
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