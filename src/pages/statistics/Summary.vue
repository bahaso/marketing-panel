<template>
  <div class="summary">
    <section class="content-header">
      <h1>
        Statistic
        <small>Summary</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-home"></i> Home</a></li>
        <li class="active">Statistic</li>
      </ol>
    </section>

    <section class="content">
        <searchel/>

        <div class="row">
          <div class="col-md-6">
            <div class="box box-info">
              <div class="box-header with-border">
                <h3 class="box-title">User's Chart</h3>
              </div>
              <div class="box-body">
                <line-chart :data="lineChartData" />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="box box-success">
              <div class="box-header with-border">
                <h3 class="box-title">Coupon Chart</h3>
              </div>
              <div class="box-body">
                <bar-chart :data="barChartData" />
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
  import searchel from '../../components/Search-el.vue'
  import BarChart from '../../components/BarChart.vue'
  import LineChart from '../../components/LineChart.vue'

  export default {
    name: 'Summary',
    components: {
      searchel,
      'bar-chart': BarChart,
      'line-chart': LineChart
    },
    data () {
      return {
        lineChartData: {
          labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label               : 'Electronics',
              fill                :  false,
              backgroundColor     : 'rgba(210, 214, 222, 1)',
              borderColor         : '#c1c7d1',
              data                : [65, 59, 80, 81, 56, 55, 40]
            },
            {
              label               : 'Digital Goods',
              fill                :  false,
              backgroundColor     : '#3b8bba',
              borderColor         : 'rgba(60,141,188,1)',
              data                : [28, 48, 40, 19, 86, 27, 90]
            }
          ]
        },
        barChartData: {
          labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label               : 'Electronics',
              backgroundColor     : '#c1c7d1',
              borderColor         : 'rgba(0,0,0,0)',
              data                : [65, 59, 80, 81, 56, 55, 40]
            },
            {
              label               : 'Digital Goods',
              backgroundColor     : '#00a65a',
              borderColor         : 'rgba(0,0,0,0)',
              data                : [28, 48, 40, 19, 86, 27, 90]
            }
          ]
        }
      }
    }
  }
</script>