<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['data'],
  mounted () {
    this.renderChart(this.data, this.chartOptions)
  },
  data () {
      return {
        chartOptions: {
          legend                  : {display: false},
          tooltips                : {mode: 'index'},
          maintainAspectRatio     : false,
          responsive              : true
        }
      }
    }
}
</script>