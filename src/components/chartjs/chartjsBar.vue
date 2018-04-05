<script>
// CommitChart.js
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['passedData'],
  mounted () {
    if (this.dataPassed) {
      let vm = this
      this.renderChart({
        labels: vm.passedData.labels,
        datasets: vm.passedData.datasets
      })
    }
  },
  computed: {
    dataPassed () {
      return !!(this.passedData)
    }
  }
}
</script>
