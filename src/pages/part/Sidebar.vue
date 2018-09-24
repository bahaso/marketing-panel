<template>
  <aside class="main-sidebar sidebar fixed">
    <section class="sidebar">
      <div class="user-panel">
        <div class="pull-left image">
          <img src="static/img/icon.png" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Levi Alexander</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>

      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">MAIN NAVIGATION</li>

        <menuel title="Generate" :subsmenu="generateMenu" icon="fa-plus-square" />
        <menuel title="Affilate" :subsmenu="affilateMenu" icon="fa-handshake-o" />
        <menuel title="Statistic" :subsmenu="statisticMenu" icon="fa-bar-chart" />
        <menuel title="Corporate" :subsmenu="corporateMenu" icon="fa-building-o" />
        <menuel title="Institute" :subsmenu="instituteMenu" icon="fa-university" />
      </ul>
    </section>
  </aside>
</template>

<script>
  import menuel from './Menu-el.vue'

    export default {
      name: 'Sidebar',
      components: {
        menuel
      },
      data () {
        return {
          generateMenu: [
            {title: 'Scholarship',link: 'test/test'},
            {title: 'Discount',link: 'test/test'}
          ],
          affilateMenu: [
            {title: 'Registration Request',link: 'test/test'},
            {title: 'Affiliator',link: 'test/test'},
            {title: 'Dashboard',link: 'test/test'},
            {title: 'Financial Dashboard',link: 'test/test'}
          ],
          statisticMenu: [
            {title: 'Summary',link: 'test/test'},
            {title: 'Profiling Users',link: 'test/test'}
          ],
          corporateMenu: [
            {title: 'Create Account',link: 'test/test'},
            {title: 'List',link: 'test/test'}
          ],
          instituteMenu: [
            {title: 'Create Account',link: 'test/test'},
            {title: 'List',link: 'test/test'}
          ]
        }
      }
    }
</script>