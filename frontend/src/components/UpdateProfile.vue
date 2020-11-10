<template>
  <div class="modif">
    <headerPage></headerPage>

    <router-link to="/WallActu">
      <button class="btn-return-wall">
        <img src="../assets/flecheReturn.svg" />Retour
      </button>
    </router-link>

    <h1>Modifier vos informations personnelles</h1>

    <label for="newBio">Votre description : </label>
    <textarea
      name="newBio"
      id="newBio"
      v-bind:value="bio"
      v-on:input="bio = $event.target.value"
    ></textarea>

    <button
      type="submit"
      value="Valider les modifications"
      class="btn-update"
      @click="update(bio)"
    >
      Valider les modifications
    </button>

    <form action="" class="form-delete">
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
    </form>

    <button
      type="submit"
      value="Supprimer mon compte"
      class="btn-delete"
      @click="deleteProfile(email, password)"
      v-if="isLoggedIn"
    >
      Supprimer mon compte
    </button>

    <footerPage></footerPage>
  </div>
</template>

<script>
import axios from "axios";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";

export default {
  name: "UpdateProfile",

  data() {
    return {
      urlData: null,
      bio: "",
      email: "",
      password: "",
    };
  },

  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },

  components: {
    headerPage: HeaderPage,
    footerPage: FooterPage,
  },

  methods: {
    update: function (bio) {
      axios
        .put("http://localhost:3000/api/users/me/", {
          bio: bio,
        })
        .then((response) => {
          console.log(response);
          this.urlData = response.json;
        });
    },

    deleteProfile: function () {
      let data = {
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("deleteProfile", data)
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },

  },
};
</script>

<style>
.modif {
  height: auto;
}

.btn-return-wall img {
  height: 40px;
  margin-top: -8.5%;
}

.btn-return-wall {
  display: flex;
  border: none;
  background-color: white;
  font-size: 20px;
  padding-top: 3.5%;
  cursor: pointer;
  color: #192a48;
  font-weight: bold;
}

.modif h1 {
  font-size: 22px;
  padding-top: 6%;
  margin-bottom: 8%;
  color: rgba(25, 42, 72, 0.85);
  text-decoration: underline;
  text-align: center;
}

.modif textarea {
  display: block;
  margin: auto;
  width: 350px;
  height: 150px;
  font-size: 16px;
  padding: 5% 5% 5% 5%;
  border-radius: 6px;
  border: solid #192a48 1px;
  margin-top: 2%;
  margin-bottom: 5%;
}

.modif label {
  color: #192a48;
  font-size: 18px;
  margin-left: 30px;
  font-weight: bold;
}

.btn-update {
  border-radius: 25px;
  background: #4b79a1;
  background: -webkit-linear-gradient(to right, #283e51, #4b79a1);
  background: linear-gradient(to right, #283e51, #4b79a1);
  font-size: 20px;
  padding: 0.5rem 3rem 0.4rem 3rem;
  border: 1px solid #192a48;
  color: #eeeeee;
  margin: auto;
  display: block;
  cursor: pointer;
  font-family: "Montserrat";
}
.btn-update:hover {
  transform: scale(1.15);
  transition-duration: 400ms;
}

.form-delete {
  text-align: center;
  width: 250px;
  border: solid #192a48 1px;
  margin: auto;
  padding: 10% 10% 10% 10%;
  border-radius: 6px;
  background-color: #eeeeee;
  margin-bottom: 5%;
  margin-top: 5%;
}

.modif input {
  font-size: 16px;
  padding: 5% 5% 5% 5%;
  border-radius: 6px;
  border: solid #192a48 1px;
}

.btn-delete {
  /* margin-left: 6%; */
  border-radius: 25px;
  background-color: #ff8a80;
  font-size: 20px;
  padding: 0.5rem 3rem 0.4rem 3rem;
  border: 1px solid #ff8a80;
  color: #192a48;
  margin: auto;
  display: block;
  cursor: pointer;
  margin-bottom: 5%;
}
.btn-delete:hover {
  transform: scale(1.15);
  transition-duration: 400ms;
}

@media screen and (min-width: 500px) {
  .modif h1 {
    font-size: 26px;
    margin-top: -2%;
    margin-bottom: 6%;
  }

  .modif textarea {
    width: 450px;
    margin-top: 3%;
    margin-bottom: 5%;
  }

  .modif label {
    font-size: 20px;
    margin-left: 45px;
  }

  .btn-update {
    font-size: 22px;
  }

  .form-delete {
    width: 350px;
    padding: 8% 8% 8% 8%;
  }

  .modif input {
    font-size: 22px;
  }

  .btn-delete {
    font-size: 22px;
  }
}
@media screen and (min-width: 650px) {
  .modif h1 {
    font-size: 28px;
    margin-top: -4%;
    margin-bottom: 5%;
  }

  .modif textarea {
    width: 500px;
    margin-top: 2%;
  }

  .modif label {
    font-size: 22px;
    margin-left: 105px;
  }

  .form-delete {
    width: 400px;
    padding: 6% 6% 6% 6%;
  }

  .modif input {
    font-size: 22px;
  }

  .btn-delete {
    font-size: 22px;
  }
}
@media screen and (min-width: 800px) {
  .btn-return-wall img {
    margin-top: -8.5%;
  }

  .btn-return-wall {
    font-size: 20px;
    padding-top: 2%;
  }

  .modif h1 {
    font-size: 28px;
    margin-top: -5%;
    margin-bottom: 5%;
  }

  .modif textarea {
    width: 700px;
    margin-top: 2%;
  }
}

@media screen and (min-width: 900px) {
  .modif h1 {
    font-size: 30px;
  }
  .modif textarea {
    width: 850px;
    height: 90px;
    margin-top: 2%;
  }
}
@media screen and (min-width: 1100px) {
  .modif h1 {
    font-size: 32px;
  }
  .modif textarea {
    width: 1400px;
    height: 30px;
    margin-top: 1%;
    margin-bottom: 2%;
  }
  .form-delete {
    margin-top: 4%;
    margin-bottom: 2%;
  }
}
</style>