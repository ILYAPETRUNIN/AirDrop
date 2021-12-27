<template>
    <header class='main-header'>
        <logo/>
        <mainMenu class='main-header__menu'/>

        <div class='main-header__info'>
            <mainMessengers/>
            <mainLangSelect/>
            <profileBtn/>
        </div>
    </header>
</template>

<script>
import logo from '../logo.vue'
import mainMenu from './MainMenu.vue'
import mainMessengers from './MainMessengers.vue'
import mainLangSelect from './MainLangSelect.vue'
import profileBtn from '../auth/profileBtn.vue'

export default {
    components:{
        logo,mainMenu,mainMessengers,mainLangSelect,profileBtn
    }
}
</script>

<style lang="stylus" scoped>
    @require '~@/assets/stylus/index.styl';
    .main-header
        flexy(row,space-between,center,nowrap)
        padding 22px 35px
        background: rgba(0, 0, 0, 0.46)
        z-index 999
        width:100%
        position:fixed
        &__menu
            width:calcPercentWidth(800)
        &__info
            width 218px
            flexy(row,space-between,center,nowrap)

</style>