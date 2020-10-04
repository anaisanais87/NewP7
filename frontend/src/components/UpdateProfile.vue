<template>
  <div class="modif">
    <div class="head-modif">
      <img
        src="../assets/icon-left-font-monochrome-black.svg"
        alt="Logo Groupomania"
        width="200"
        class="logo-groupomania"
      />

      <p class="my-account">Mon Compte</p>
    </div>

    <h1>Modifier vos informations personnelles</h1>

    <label for="newBio">Votre description : </label>
    <textarea
      name="newBio"
      id="newBio"
      v-bind:value="newBio"
      v-on:input="newBio = $event.target.value"
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
    >
      Supprimer mon compte
    </button>
  </div>
</template>

<script>
import axios from "axios";

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

    deleteProfile: function (email, password) {
      axios
        .delete("http://localhost:3000/api/users/delete/", {
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

<style>
.head-modif {
  background-color: rgba(25, 42, 72, 0.85);
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 3% 3% 1% 3%;
}

.my-account {
  font-family: sans-serif;
  font-size: 20px;
  margin-top: 2.5%;
  margin-bottom: 0;
  color: #aeaeb0;
  cursor: pointer;
}

.modif h1 {
  font-family: sans-serif;
  font-size: 26px;
  padding-top: 8%;
  margin-bottom: 8%;
  color: rgba(25, 42, 72, 0.85);
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
  font-size: 20px;
  margin-left: 70px;
  font-weight: bold;
}

.btn-update {
  /* margin-left: 6%; */
  border-radius: 25px;
  background-color: #192a48;
  font-size: 20px;
  padding: 0.5rem 3rem 0.4rem 3rem;
  border: 1px solid #192a48;
  color: #eeeeee;
  margin: auto;
  display: block;
  cursor: pointer;
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
  font-weight: bold;
}
.btn-delete:hover {
  transform: scale(1.15);
  transition-duration: 400ms;
}
</style>