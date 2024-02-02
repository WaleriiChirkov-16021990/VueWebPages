<script>
import {mapGetters} from "vuex";

export default {
  name: "NofFound",
  computed: {
    ...mapGetters(['getNotFoundPageBanner', 'getLinkButton']),
  }
}
</script>

<template>
  <div class="not__found">
    <div class="left__not_found">
      <p class="text__not__found"><span class="code">404</span><br/>{{ getNotFoundPageBanner.description }}</p>
      <a :href="getLinkButton.link" class="link__back_to_home">
        <div class="button__back_to_home"><p class="back_to_home">Back to home</p> <p class="arrow__button_back"> <img :src="getLinkButton.imageArrows" alt="arrow"></p></div></a>
    </div>
    <div class="right__not_found">
      <img class="img__right_not_found" :src="getNotFoundPageBanner.image" alt="posterImg">
    </div>
  </div>
</template>

<style scoped lang="css">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.not__found {
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 1600px;
  font-size: 10px;
  margin-left: 400px;
}

.left__not_found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: 50vh;
  width: 50%;
  margin-right: 50px;
}

.button__back_to_home {
  border: 1px solid #292F36;
  border-radius: 15px;
  background-color: #292F36;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  padding: 20px 40px;
  margin-top: 20px;
  cursor: pointer;
  gap: 20px;
}

.back_to_home {
  font-size: 18px;
  color: white;
}

.link__back_to_home {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.right__not_found {
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img__right_not_found {
  border-radius: 0 0 0 300px;
}

.text__not__found {
  font-size: 40px;
  font-weight: bold;
  color: #292F36;
}


.code {
  color: rgba(178, 141, 113, 0.98);
  font-size: 300px;
}

</style>