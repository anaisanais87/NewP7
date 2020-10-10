<template>

  <div class="actu">
    <headerPage></headerPage>

    <div class="wall">
      <h1>
        Bonjour {{ username }} ! <br />
        Partager et échanger avec vos collègues !
      </h1>

      <div class="write-post">
        <p class="create-post">
          &nbsp;Créer une publication
          <button
            type="submit"
            value="Publier"
            class="btn-publish"
            @click="publish(title, content)"
          >
            Publier
          </button>
        </p>

        <div class="write">
          <img src="../assets/pen_write.png" width="35px" height="40px" />

          <div class="inputPost">
            <input
              type="text"
              id="titlePost"
              class="titlePost"
              v-bind:value="title"
              v-on:input="title = $event.target.value"
              placeholder="Titre de votre post"
            />
            <input
              type="text"
              id="contentPost"
              class="contentPost"
              v-bind:value="content"
              v-on:input="content = $event.target.value"
              placeholder="Rédiger un post"
            />
          </div>
        </div>

        <div class="post">
          <img src="../assets/photo_red.png" width="35px" height="35px" />
          <p @click="addFile(attachment)">&nbsp;Photo</p>

          <img src="../assets/gif.png" width="35px" height="35px" />
          <p @click="addFile(attachment)">&nbsp;Gif</p>

          <img src="../assets/doc_color.png" width="35px" height="35px" />
          <p @click="addFile(attachment)">&nbsp;Document</p>
        </div>
      </div>

      <div class="news">
        <p class="news-title">&nbsp;Fil d'actualité</p>

        <p
          class="new-post"
          v-bind:value="postUsers"
          v-on:input="postUsers = $event.target.value"
        >
          Publication des autres utilisateurs {{ postUsers }}
        </p>

        <div class="react-news">
          <img src="../assets/like_blue.png" width="30px" height="30px" />
          <p @click="addLike">&nbsp;J'aime</p>

          <img src="../assets/bubble_blue.png" width="35px" height="35px" />
          <p @click="comment">&nbsp;Commenter</p>
        </div>
      </div>
    </div>

    <footerPage></footerPage>
  </div>

</template>

<script>
import axios from "axios";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";

export default {
  name: "WallActu",

  data() {
    return {
      username: this.$store.username,
      // username: this.$route.username,
      urlData: null,
      title: "",
      content: "",
      attachment: "",
      postUser: this.$route.listMessages,
    };
  },

  components: {
    headerPage: HeaderPage,
    footerPage: FooterPage,
  },

  methods: {
    addFile: function (attachment) {
      axios
        .post("http://localhost:3000/api/messages/new/", {
          attachment: attachment,
        })
        .then((response) => {
          console.log(response);
          this.urlData = response.json;
        });
    },

    publish: function (title, content) {
      axios
        .post("http://localhost:3000/api/messages/new/", {
          title: title,
          content: content,
        })
        .then((response) => {
          console.log(response);
          this.urlData = response.json;
        });
    },

    addLike: function (messageId) {
      axios
        .post("http://localhost:3000/api/messages/:messageId/vote/like", {
          messageId: messageId,
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
.wall {
  height: auto;
}

.wall h1 {
  font-size: 22px;
  padding-top: 6%;
  margin-bottom: 4%;
  color: rgba(25, 42, 72, 0.85);
}

.create-post {
  border: solid 0.2px;
  width: 350px;
  height: 30px;
  margin: auto;
  display: block;
  margin-top: 5%;
  font-size: 16px;
  background-color: #eeeeee;
  color: #aeaeb0;
  font-style: italic;
  padding: 0.5rem 0.5rem 0.4rem 0.5rem;
}

.btn-publish {
  border: none;
  cursor: pointer;
  color: rgba(25, 42, 72, 0.85);
  font-size: 16px;
  font-weight: bold;
  margin-left: 26%;
  margin-top: 1.5%;
}

.btn-publish:hover {
  transform: scale(1.15);
  transition-duration: 400ms;
}

.write {
  display: flex;
  border: solid 0.2px;
  border-top: none;
  width: 350px;
  height: 100px;
  margin: auto;
  margin-top: 0;
  color: #aeaeb0;
  padding: 0.5rem 0.5rem 0.4rem 0.5rem;
}

.write img {
  margin-top: 7%;
  margin-right: 2%;
}

.post {
  display: flex;
  justify-content: space-around;
  border: solid 0.2px;
  border-top: none;
  width: 350px;
  height: 40px;
  margin: auto;
  margin-top: 0;
  font-size: 14px;
  color: #192a48;
  padding: 0.5rem 0.5rem 0.4rem 0.5rem;
  cursor: pointer;
}
.post img {
  margin-right: -9%;
}

.post img:hover {
  transform: scale(1.15);
  transition-duration: 400ms;
}

.inputPost {
  display: flex;
  flex-direction: column;
}

.titlePost {
  height: 25px;
  font-size: 16px;
  border: none;
  font-style: italic;
  text-decoration: underline;
}

.contentPost {
  height: 60px;
  font-size: 16px;
  border: none;
  font-style: italic;
}

.news {
  margin-bottom: 5%;
}

.news-title {
  border: solid 0.2px;
  width: 350px;
  height: 30px;
  margin: auto;
  display: block;
  margin-top: 5%;
  font-size: 16px;
  background-color: #eeeeee;
  color: #aeaeb0;
  font-style: italic;
  padding: 0.5rem 0.5rem 0.4rem 0.5rem;
}

.new-post {
  display: flex;
  border: solid 0.2px;
  border-top: none;
  width: 350px;
  height: 300px;
  margin: auto;
  margin-top: 0;
  font-size: 16px;
  color: #aeaeb0;
  font-style: italic;
  padding: 0.5rem 0.5rem 0.4rem 0.5rem;
}

.react-news {
  display: flex;
  justify-content: space-around;
  border: solid 0.2px;
  border-top: none;
  width: 350px;
  height: 40px;
  margin: auto;
  margin-top: 0;
  font-size: 14px;
  color: #192a48;
  padding: 0.5rem 0.5rem 0.4rem 0.5rem;
  font-family: "nevis";
}
.react-news img {
  margin-right: -18%;
  cursor: pointer;
}

.react-news img:hover {
  transform: scale(1.15);
  transition-duration: 400ms;
}
</style>