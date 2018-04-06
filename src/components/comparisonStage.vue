<template>
  <div class="comparison_stage">
    <h1>{{ msg }}</h1>
    <section class="comparison_stage--columns">
      <article class="comparison comparison--bar">
        <div class="comparison_stage--left">
          <chartjsBar :passedData="bar.data"></chartjsBar>
        </div>
        <div class="comparison_stage--right">
          <chartistBar :passedData="bar.data"></chartistBar>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'comparisonStage',
  components: {
    'chartjsBar': () => import('./chartjs/chartjsBar'),
    'chartistBar': () => import('./chartist/chartistBar')
  },
  data () {
    return {
      msg: 'Compare Chartist with Chart.js',
      bar: {
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'GitHub Commits',
              backgroundColor: '#f87979',
              data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
            }
          ]
        }
      },
      donut: {
        data: null
      },
      line: {
        data: null
      }
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

.comparison {
  display: flex;
}
</style>
