<template>
  <div class="footer">
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
  background: #4B79A1;  
  background: -webkit-linear-gradient(to right, #283E51, #4B79A1);  
  background: linear-gradient(to right, #283E51, #4B79A1); 
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 85px;
}

.footer img {
  margin-top: 0;
}

.footer p {
  color: #aeaeb0;
  font-size: 16px;
  text-align: center;
  margin: 0.5%;
}

@media screen and (min-width: 992px) {
  .footer {
    font-size: 24px;
    height: 90px;
  }
}
@media screen and (min-width: 1162px) {
  .footer {
    height: 95px;
    font-size: 26px;
  }
}
@media screen and (min-width: 1200px) {
  .footer {
    height: 117px;
  }
}
</style>