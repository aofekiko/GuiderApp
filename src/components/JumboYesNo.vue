<template>
  <div class="hello">
    <b-jumbotron class="p-5" bg-variant="info">
      <template #header>{{header}}</template>

      <template #lead>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </template>

      <hr class="my-4" />

      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>

      <b-button @click="nextPage()" class="mr-5 pl-5 pr-5" variant="success" href="#">YES</b-button>
      <b-button @click="nextPage()" class="pl-5 pr-5" variant="danger" href="#">NO</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "JumboYesNo",
  props: {
    header: String,
    lead: String,
    msg: String,
  },
  methods: {
    nextPage() {
      this.$store.commit('nextPage')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
