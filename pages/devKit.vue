<template>
    <div>
        <div class='my-container'>
            <ButtonUI :style='{marginRight:"10px"}' fill label='Actual Airdrops'/>
            <ButtonUI :style='{marginRight:"10px"}' outline label='Actual Airdrops'/>
            <ButtonUI disabled label='Actual Airdrops'/>  
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/mixins/index.styl';
    
    .my-container
        width 100%
        padding 50px
        flexy(row,center,center,nowrap)
</style>