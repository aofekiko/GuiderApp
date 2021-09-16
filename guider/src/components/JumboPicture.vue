<template>
  <div class="hello">
    <b-jumbotron class="p-5" bg-variant="info">
      <template #header>{{header}}</template>

        <b-img thumbnail fluid v-bind:src="pic"  alt="Responsive image"></b-img>
      
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "JumboPicture",
  props: {
    header: String,
    pic: String
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
