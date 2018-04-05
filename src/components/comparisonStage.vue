<template>
  <div class="comparison_stage">
    <h1>{{ msg }}</h1>
    <section class="comparison_stage--columns">
      <div class="comparison_stage--left"></div>
      <div class="comparison_stage--right"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'comparisonStage',
  data () {
    return {
      msg: 'Compare Chartist with Chart.js'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.comparison_stage--columns {
  margin: 0 auto 2rem auto;
  width: 90vw;
  background: white;
  min-height: 40rem;
}
</style>
