<template>
    <div id='bg' class='bg'>
        <img class='bg__1' src="~assets/img/background/homeEllipse1.png" alt="">
        <img class='bg__2' src="~assets/img/background/homeEllipse2.png" alt="">
        <img class='bg__3' src="~assets/img/background/mainBgr.png" alt="">
        <img class='bg__4' src="~assets/img/background/mainBgr1.png" alt="">
        <img class='bg__5' src="~assets/img/background/mainBgr2.png" alt="">
        <div class='bg__slot'>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import FlyBlocks from '@/utils/animation/flyBlocks'

let listSrc=[
  require('@/assets/img/Cubes/Cube1.png'),
  require('@/assets/img/Cubes/Cube2.png'),
  require('@/assets/img/Cubes/Cube3.png')
]

export default {
  data(){
    return{
        flyBlock:null
    }
  },

  mounted(){
      this.flyBlock=new FlyBlocks({id:'bg',maxNumBlock:20,listSrc:listSrc})
  }

}

</script>

<style lang="stylus" scoped>
 @require '~@/assets/stylus/index.styl';
 @keyframes moving {
    50% {transform: scaleX(5)}
    100% {transform: scaleX(1)}
}

.bg
    height:100vh
    width:100vw
    overflow:hidden
    position:relative
    
    img
        pointer-events: none; 
    &__slot
        height:100%
        width:100%
        z-index:11
        position:absolute
    &__3
        absolute()
        mix-blend-mode: color-dodge;
        opacity: 0.7;
        height:100%
        z-index:9
    &__1{
        position: absolute;
        left 0px
        top:0px
        height:100%
        z-index:9
        animation: moving 6s infinite linear;
    }
    &__2
        position: absolute;
        right 0px
        top:0px
        height:100%
        z-index:9
        animation: moving 6s infinite linear;
    &__4
        position: absolute;
        bottom:0px;
        right:0px;
        z-index:9
        +breakpoint(lg-and-down){
            right:-200px
        }
        +breakpoint(md-and-down){
            right:-250px
            height:65%
        }

    &__5
        position: absolute;
        bottom:0px;
        right:0px;
        z-index:9

</style>