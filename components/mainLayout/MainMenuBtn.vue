<template>
      <svg class='main-menu-btn' height="16" width="27">
        <use :xlink:href="require('@/assets/icons.svg')+'#menu.burger'"></use>
      </svg>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  @require '~@/assets/stylus/index.styl';
  .main-menu-btn
      cursor:pointer
      stroke: white;
      transition:all 0.5s
      &:hover
          stroke: $dark.secondary;              
</style>