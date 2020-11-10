<template>
  <div>
    <div class="user">
    <img src="../assets/user_icon_blue.svg" width="30px" height="30px" /> 
    <h2 class="name-user">{{ username }}</h2>
    </div>
    <h2 class="title">{{ title }}</h2>
    <p>{{ content }}</p>
    <img v-bind:src= "fileToDisplay" class="filePost"/>
    

    <div class="react-news">
      <img src="../assets/bubble_blue.png" width="35px" height="35px" /> 
      <input
        type="text"
        class="comment"
        placeholder="Ecrire un commentaire..."
        @click="comment"
      />
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
    };
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    fileToDisplay: {
      type: String,
      required: false,
    },
    userId: {
      type: Number,
      required: true,
    },
    messageId: {
      type: Number,
      required: true,
    },
  },

  mounted() {
    this.findId();
  },

  methods: {
    findId: async function () {
      await axios
        .get("http://localhost:3000/api/users/" + this.userId)

        .then((response) => {
          this.username = response.data.user.username;
          return this.username;
        })

        .catch((error) => {
          console.log(error);
        });
    },

    comment: function () {
      // console.log("le post devrait etre liké")
      axios
        .post(
          "http://localhost:3000/api/messages/" + this.messageId + "/comment"
        )

        .then(() => {
          console.log("Le post a été liké");
        });
    },
  },
};
</script>


<style>
.user {
  display: flex;
}

.user h2 {
  margin-top: 1%;

}

.user img {
  margin-right: 2%;
  border: solid 1px #192a48;
  border-radius:50px;
}

.title {
  font-weight: normal;
  margin-top: 0;
}

.filePost {
  width: 350px;
  height: 200px;
  display: block;
  margin: auto;
  padding-bottom: 5%;
}

.react-news {
  display: flex;
  justify-content: space-around;
  border-top: solid 0.2px;
  width: 350px;
  height: 30px;
  margin: auto;
  margin-top: 0;
  font-size: 14px;
  color: #192a48;
  padding: 0.5rem 0.5rem 0.4rem 0.5rem;
  font-family: "nevis";
  margin-left: -10px;
}

.react-news input {
  border: solid 1px #192a48;
  border-radius: 15px;
  width: 360px;
  padding-left: 5%;
  font-size: 18px;
}
@media screen and (min-width: 600px) {
  .react-news {
    width: 450px;
    font-size: 16px;
  }
}

@media screen and (min-width: 800px) {
  .react-news {
    width: 550px;
    font-size: 16px;
    padding: 0.5rem 0.5rem 0.6rem 0.5rem;
  }
  .react-news img {
    margin-right: -18%;
  }
}

@media screen and (min-width: 960px) {
  .react-news {
    width: 650px;
    font-size: 18px;
    padding: 0.8rem 0.5rem 0.8rem 0.5rem;
  }

  .react-news p {
    margin-top: 1.5%;
  }
  .react-news img {
    margin-right: -18%;
  }
}
</style>
