<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
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