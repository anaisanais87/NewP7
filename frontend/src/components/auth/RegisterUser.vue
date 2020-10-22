<template>
  <div class="authentification">
    <router-link to="/">
      <img src="../../assets/icon-above-font1.png" width="300" />
    </router-link>

    <div class="form-auth">
      <form class="my_form" @submit.prevent="register">
        <p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            required
            v-bind:value="email"
            v-on:input="email = $event.target.value"
          />
          <span id="error_email_register"></span>
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
          <span id="error_password_register"></span>
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
    >
      S'inscrire
    </button>

    <div class="new-auth">
      <p>
        Déjà inscrit&nbsp;?
        <router-link to="/LoginUser">
          <span class="btn-register"> S'identifier</span>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
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

  methods: {
    register: function () {
      let data = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      
      try {
          this.validateForm(this.email, this.password)
      }
      
      catch(err) {
          console.log(err)
          return 
      }

      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/LoginUser"))
        .catch((err) => console.log(err));
    },

    validateForm: function (email, password) {
      //Création de la fonction qui permet de valider le formulaire

      // eslint-disable-next-line no-useless-escape
      const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // eslint-disable-next-line no-useless-escape
      const regexPassword = /^(?=.*\d).{4,8}$/;

      let formSubmit = true;
      var messageError = "Format saisi invalide !";

      console.log(email);
      console.log(password);

      if (!regexEmail.test(email)) {
        //SI la valeur de l'adresse email est différente de la regexEmail alors:

        
        console.log(messageError);
        document.getElementById("error_email_register").textContent = messageError; //Un message d'erreur s'affiche
        formSubmit = false; //Et la valeur formSubmit renvoie false

        throw new Error("L'email n'est pas au bon format !");
      }

      if (!regexPassword.test(password)){

        //Je répète l'opération avec toutes les valeurs de tous les champs
        document.getElementById("error_password_register").textContent = messageError;

        throw new Error("Le password n'est pas au bon format !");
      }

      if (formSubmit === true) {
        //Lorsque formSubmit renvoie true, le formulaire est rempli correctement
      }
    },
  },
};
</script>


<style scoped>
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

.form-auth textarea {
  font-size: 18px;
  padding: 5% 5% 5% 5%;
  border-radius: 6px;
  border: solid #192a48 1px;
}

.btn-auth {
  margin-left: 6%;
  border-radius: 25px;
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

.form-auth p {
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

@media screen and (min-width: 500px) {
  .authentification img {
    margin-top: 5%;
  }

  .form-auth {
    padding: 8% 8% 8% 8%;
  }
}
@media screen and (min-width: 550px) {
  .authentification img {
    margin-top: 5%;
  }

  .form-auth {
    padding: 6% 6% 6% 6%;
    margin-bottom: 6%;
  }

  .new-auth {
    font-size: 19px;
    margin-top: 4%;
  }
}

@media screen and (min-width: 700px) {
  .form-auth {
    padding: 4% 4% 4% 4%;
    margin-bottom: 6%;
  }
  .btn-auth {
    font-size: 22px;
  }
}

@media screen and (min-width: 900px) {
  .authentification img {
    margin-top: 3%;
    margin-bottom: 3%;
  }
  .form-auth {
    margin-bottom: 4%;
  }
}
@media screen and (min-width: 1280px) {
  .authentification img {
    margin-top: 2%;
    margin-bottom: 2%;
  }
  .form-auth {
    margin-bottom: 3%;
  }
  .new-auth {
    font-size: 21px;
    margin-top: 2%;
  }
}
</style>