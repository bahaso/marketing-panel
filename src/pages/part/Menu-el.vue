<template>
  <li class="treeview menuel">
    <a href="#">
      <i class="fa" :class="icon"></i>
      <span>{{ title }}</span>
    </a>
    <ul class="treeview-menu">
      <li v-for="menu in subsmenu">
        <a :href="menu.link">
          <i class="fa fa-circle-o"></i> {{ menu.title }}
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'Menuel',
  props: ['title', 'icon', 'subsmenu']
}
</script>