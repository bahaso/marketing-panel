<template>
  <div id="app" class="wrapper">
    <navbar/>

    <sidebar/>

    <div class="content-wrapper">
      <router-view/>
    </div>

    <footerel/>
  </div>
</template>

<script>
  import navbar from './pages/part/Navbar.vue'
  import sidebar from './pages/part/Sidebar.vue'
  import footerel from './pages/part/Footer.vue'

  export default {
    name: 'App',
    components: {
      navbar,
      sidebar,
      footerel
    }
  }
</script>