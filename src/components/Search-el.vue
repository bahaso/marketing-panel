<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-7">
      <div class="row">
        <div class="col-sm-5 no-padding">
          <date-picker v-model="dateFrom" :config="options"></date-picker>
        </div>
        <span class="col-sm-2">to</span>
        <div class="col-sm-5 no-padding">
          <date-picker v-model="dateTo" :config="options"></date-picker>
        </div>
      </div>
    </div>
    <div class="col-md-1">
      <button class="btn btn-primary pull-right">Search</button>
    </div>
  </div>
</template>

<script>
  // Import this component
  import datePicker from 'vue-bootstrap-datetimepicker';
  
  // Import date picker css
  import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
   
  export default {    
    name: 'Searchel',
    data () {
      return {
        dateFrom: new Date(),
        dateTo: new Date(),
        options: {
          format: 'DD MMMM YYYY',
          useCurrent: false,
        }       
      }
    },
    components: {
      datePicker
    }
  }
</script>

<style scoped>
  .row {
    margin-bottom: 1.3rem;
  }
  span.col-sm-2 {
    padding-top: 6px;
  }
</style>