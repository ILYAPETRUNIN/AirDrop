<template>
 <div class='home'>
     <img class='home__bg1' src="~assets/img/background/homeEllipse1.png" alt="">
     <img class='home__bg2' src="~assets/img/background/homeEllipse2.png" alt="">
     <img class='home__bg3' src="~assets/img/background/mainBgr.png" alt="">
     <img class='home__bg4' src="~assets/img/background/mainBgr1.png" alt="">
 </div>
</template>

<style lang="stylus" scoped>
 @require '~@/assets/stylus/index.styl';
    .home
        height:100vh
        overflow:hidden
        position:relative
        &__bg3
            absolute()
            mix-blend-mode: color-dodge;
            opacity: 0.7;
            height:100%
        &__bg1
            position: absolute;
            left 0px
            top:0px
            height:100%
        &__bg2
            position: absolute;
            right 0px
            top:0px
            height:100%
        &__bg4
            position: absolute;
            top:377px;
</style>
