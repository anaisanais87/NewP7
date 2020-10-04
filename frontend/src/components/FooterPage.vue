<template>
  <div class="footer">

    <!-- <p><img src="../assets/icon-above-font.svg" width="100" /></p> -->

    <p> Copyright  &#169; Groupomania</p>
    <p>Mentions légales - Conditions générales d'utilisation</p>
  </div>
</template>

<script>

export default {
  name: "FooterPage",
};
</script>

<style>
.footer {
  margin-bottom: 0;
  background-color: rgba(25, 42, 72, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80px;
}

.footer img {
  margin-top: 0;
}

.footer p {
  color: #aeaeb0;
  font-size: 18px;
  text-align: center;
  margin: 0.5%;
}

</style>