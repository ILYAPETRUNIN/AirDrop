<template>
  <v-dialog v-model="display" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          icon
          plain
          v-bind="attrs"
          v-on="on"
        >
          <mainMenuBtn/>
        </v-btn>
      </template>
      <div class='mobile-menu'>
        <main-menu mobile/>
        <main-messengers/>
        <v-btn class='mobile-menu__closeBtn' @click='display=false' dark icon plain>
          <svg class='main-menu-btn' height="40" width="40">
            <use :xlink:href="require('@/assets/icons.svg')+'#menu.close'"></use>
          </svg>
        </v-btn>
      </div>
  </v-dialog>
</template>

<script>
import mainMenuBtn from './MainMenuBtn.vue'
import mainMenu from './MainMenu.vue'
import mainMessengers from './MainMessengers.vue'

export default {
  data(){
    return{
      display:false
    }
  },
  
  components:{
    mainMenuBtn,mainMenu,mainMessengers
  }
}
</script>

<style lang="stylus" scoped>
  @require '~@/assets/stylus/index.styl';
  .mobile-menu
    width:100vw
    height:100vh
    background: linear-gradient(180deg, rgba($dark.third,1) 0%, rgba($dark.primary, 0.8) 100%);
    border: 2px solid #257B8E;
    box-sizing: border-box;
    border-radius: 40px;
    position: relative;
    padding:30px
    flexy(column,space-evenly,center,nowrap)
    &__closeBtn{
      top:20px;
      right:20px;
      position: absolute;
    }
</style>