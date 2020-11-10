<template>
  <div class="actu">
    <headerPage></headerPage>

    <div class="wall">
      <h1>
        Bonjour ! <br />
        Partager et échanger avec vos collègues !
      </h1>

      <div class="write-post">
        <p class="create-post">&nbsp;Créer une publication</p>

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

            <div class="image-upload">
              <label for="file">
                <img src="../assets/photo_red.png" width="35px" height="35px" />
                <span>Multimedia</span>
              </label>

              <input
                style="display: none"
                id="file"
                type="file"
                ref="fileInput"
                @change="onFileSelected"
              />
              <button @click="onUpload(title, content)" class="btn-upload-file">
                Télécharger
              </button>
            </div>
          </div>
        </div>

        <div class="post">
          <div class="image-upload">
            <button
              type="submit"
              value="Publier"
              class="btn-publish"
              @click="publish(title, content, attachment)"
            >
              Publier
            </button>
          </div>
        </div>
      </div>

      <div class="news">
        <p class="news-title">&nbsp;Fil d'actualité</p>

        <div>
          <post
            v-for="message in response"
            :key="message.id"
            :title="message.title"
            :content="message.content"
            :fileToDisplay="message.attachment"
            :userId="message.userId"
            :messageId="message.id"
            class="allPost"
          ></post>
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
import Post from "./Post";

export default {
  name: "WallActu",

  data() {
    return {
      urlData: null,
      selectedFile: null,
      title: "",
      content: "",
      attachment: "",
      response: [],
    };
  },

  components: {
    headerPage: HeaderPage,
    footerPage: FooterPage,
    post: Post,
  },

  created() {
    this.allPost();
  },

  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },

    onUpload(title, content) {
      const formData = new FormData();
      formData.append("image", this.selectedFile);
      formData.append("title", title);
      formData.append("content", content);

      console.log(formData);
      axios
        .post(
          "http://localhost:3000/api/messages/new/",

          formData
        )

        .then((res) => {
          console.log(res);
        });
    },

    publish: function (title, content, attachment) {
      axios
        .post("http://localhost:3000/api/messages/new/", {
          title: title,
          content: content,
          attachment: attachment,
        })
        .then((response) => {
          console.log(response);
          this.response = response.json;
        })

        .catch((error) => {
          console.log(error);
        });
    },

    allPost: function () {
      axios
        .get("http://localhost:3000/api/messages")

        .then((response) => {
          this.response = response.data;
          // console.log(this.response)
        })

        .catch((error) => {
          console.log(error);
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
  text-align: center;
  font-weight: bold;
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
  border-radius: 5px;
  cursor: pointer;
  color: rgba(25, 42, 72, 0.85);
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin: auto;
  margin-top: 2%;
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
  height: 160px;
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
  border: solid 0.2px;
  border-top: none;
  width: 350px;
  height: 40px;
  margin: auto;
  margin-top: 0;
  font-size: 18px;
  color: #192a48;
  padding: 0.5rem 0.5rem 0.4rem 0.5rem;
  cursor: pointer;
}

.btn-upload--file {
  padding-top: 10px;
}

.image-upload > input {
  display: none;
}

.image-upload img {
  padding-right: 16px;
  cursor: pointer;
}

.image-upload span {
  display: block;
  margin-top: -30px;
  margin-left: 40px;
  padding-bottom: 15px;
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
  margin-top: 10%;
  font-size: 16px;
  background-color: #eeeeee;
  color: #aeaeb0;
  font-style: italic;
  padding: 0.5rem 0.5rem 0.4rem 0.5rem;
}

.allPost {
  border: solid 0.2px;
  border-top: none;
  width: 350px;
  height: auto;
  margin: auto;
  margin-top: 0;
  font-size: 16px;
  color: #192a48;
  padding: 0.5rem 0.5rem 0.4rem 0.5rem;
  margin-bottom: 5%;
  border-top: solid 0.2px;
}

@media screen and (min-width: 600px) {
  .wall h1 {
    font-size: 26px;
  }

  .create-post {
    width: 450px;
    font-size: 18px;
  }

  .btn-publish {
    font-size: 18px;
  }

  .write {
    width: 450px;
    padding: 0.5rem 0.5rem 0.4rem 0.5rem;
  }

  .titlePost {
    height: 25px;
    font-size: 18px;
  }

  .contentPost {
    height: 60px;
    font-size: 18px;
  }

  .post {
    width: 450px;
    font-size: 16px;
    padding: 0.5rem 0.5rem 0.6rem 0.5rem;
  }

  .news {
    margin-bottom: 5%;
  }

  .news-title {
    width: 450px;
    font-size: 18px;
  }

  .allPost {
    width: 450px;
    font-size: 18px;
  }
}

@media screen and (min-width: 800px) {
  .wall h1 {
    font-size: 30px;
    margin-top: 0;
  }

  .create-post {
    width: 550px;
    font-size: 20px;
  }

  .btn-publish {
    font-size: 18px;
  }

  .write {
    width: 550px;
  }

  .write img {
    margin-top: 5%;
  }

  .post {
    width: 550px;
    font-size: 18px;
    padding: 0.5rem 0.5rem 0.6rem 0.5rem;
  }

  .titlePost {
    height: 25px;
    font-size: 18px;
  }

  .contentPost {
    height: 60px;
    font-size: 18px;
  }

  .news-title {
    width: 550px;
    font-size: 18px;
  }

  .allPost {
    width: 550px;
    font-size: 18px;
  }
}

@media screen and (min-width: 960px) {
  .wall h1 {
    font-size: 34px;
    margin-top: 0;
    padding-top: 4%;
    margin-bottom: -2%;
  }

  .create-post {
    width: 650px;
    font-size: 22px;
  }

  .btn-publish {
    font-size: 20px;
  }

  .write {
    width: 650px;
  }

  .write img {
    margin-top: 4%;
  }

  .post {
    width: 650px;
    font-size: 20px;
    padding: 0.8rem 0.5rem 0.8rem 0.5rem;
  }

  .post p {
    margin-top: 1.5%;
  }

  .titlePost {
    font-size: 20px;
  }

  .contentPost {
    font-size: 20px;
  }

  .news-title {
    width: 650px;
    font-size: 20px;
    margin-top: 3%;
  }

  .allPost {
    width: 650px;
    font-size: 20px;
  }
}
</style>