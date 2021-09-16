<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand class="mr-auto" href="#">BORGIR.js</b-navbar-brand>
      <b-navbar-nav class="mx-auto">
        <b-nav-text>Tutorial name</b-nav-text>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-text class="mr-2" >Page: {{this.$store.state.currentPage}}</b-nav-text>
        <b-button variant="outline-warning" type="submit">Back</b-button>
      </b-navbar-nav>
    </b-navbar>

    <b-row>
      <b-col>
        <JumboPicture
          header="This is a pic"
          pic="https://picsum.photos/250/250/?image=54"
        ></JumboPicture>
      </b-col>
      <b-col>
        <JumboQuestion header="GENERAL KENOBI"></JumboQuestion>
      </b-col>
      <b-col>
        <JumboQuestion header="!!!!"></JumboQuestion>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col>
        <JumboYesNo header="GIVE ME YOUR FOOKING ANSWER"></JumboYesNo>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import JumboYesNo from "./components/JumboYesNo.vue";
import JumboQuestion from "./components/JumboQuestion.vue";
import JumboPicture from "./components/JumboPicture.vue";
export default {
  name: "App",
  components: { JumboYesNo, JumboQuestion, JumboPicture },
};
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #502c3b;
}
body {
  background-color: darkorchid;
}
</style>
