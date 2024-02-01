<script>
import {mapGetters} from "vuex";

export default {
  name: "NofFound",
  computed: {
    ...mapGetters(['getNotFoundPageBanner']),
  }
}
</script>

<template>
  <div class="not__found">
    <div class="left__not_found">
      <p class="text__not__found"><span class="code">404</span><br/>{{ getNotFoundPageBanner.description }}</p>
    </div>
    <div class="right__not_found">
      <img :src="getNotFoundPageBanner.image" alt="posterImg">
    </div>
  </div>
</template>

<style scoped lang="css">
.not__found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 1920px;
  background-color: #292F36;
  color: black;
  font-size: 250px;
}

.left__not_found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.right__not_found {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text__not__found {
  font-size: 100px;
  font-weight: bold;
  color: white;
}


.code {
  color: goldenrod;
}

</style>