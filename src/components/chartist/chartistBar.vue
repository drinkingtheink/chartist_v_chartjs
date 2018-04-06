<template>
  <div class="chartistBar" ref="chartistBar"></div>
</template>

<script>
import Chartist from 'Chartist'
export default {
  props: ['passedData'],
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.drawChart()
  },
  methods: {
    drawChart () {
      /* eslint-disable no-new */
      this.chart = new Chartist.Pie('.chartistBar', {
        series: this.series,
        labels: this.labels
      }, {
        donut: true,
        showLabel: false
      })
    }
  },
  computed: {
    dataPassed () {
      return !!(this.passedData)
    },
    series () {
      return this.dataPassed ? this.passedData.datasets : []
    },
    labels () {
      return this.dataPassed ? this.passedData.labels : []
    }
  }
}
</script>

<style>

</style>
