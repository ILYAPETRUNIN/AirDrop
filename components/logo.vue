<template>
    <div class='logo'>
        <svg height="29" width="29" fill='white'><use xlink:href="~assets/icons.svg#logo"></use></svg>
        <p class='logo__text'>Foil.Network</p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/index.styl';
    .logo
        setFont('adineuePROCyr',bold,normal,28px)
        flexy(row,center,center,nowrap)
        &__text
            noMargin()
            margin-left 8px

</style>