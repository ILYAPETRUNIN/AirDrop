<template>
    <header class='main-header'>
        <logo/>
        <main-menu class='main-header__menu'/>

        <div class='main-header__desctop'>
            <main-messengers/>
            <main-lang-select/>
            <profile-btn/>
        </div>

        <div class='main-header__mobile'>
            <main-lang-select/>
            <main-mobile-menu/>
        </div>


    </header>
</template>

<script>
import logo from '../logo.vue'
import mainMenu from './MainMenu.vue'
import mainMessengers from './MainMessengers.vue'
import mainLangSelect from './MainLangSelect.vue'
import profileBtn from '../auth/profileBtn.vue'
import mainMobileMenu from './MainMobileMenu'

export default {
    components:{
        logo,mainMenu,mainMessengers,mainLangSelect,profileBtn,mainMobileMenu 
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
            +breakpoint(md-and-down){display:none}
        &__desctop
            width 218px
            flexy(row,space-between,center,nowrap)
            +breakpoint(md-and-down){display:none}
        &__mobile
            +breakpoint(lg-and-up){display:none}
            
</style>