<template>
    <button v-ripple class='buttonScroll'>
        <svg class='buttonScroll__icon'  height="20" width="12"><use xlink:href="~assets/icons.svg#arrow.down"></use></svg>
    </button>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
 @require '~@/assets/stylus/index.styl';
   .buttonScroll
      border-radius 130px
      width 130px
      height 130px
      border 2px solid
      &__icon
        fill:$dark.secondary

</style>