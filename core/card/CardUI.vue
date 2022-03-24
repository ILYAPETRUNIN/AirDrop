<template>
  <div :class='classesGeneral' class='card-ui'>
    <div :class='classesImg' class='card-ui__img'>
        <img :src="img"/>
    </div>
    <h2 :class='classesName' class='card-ui__name'>{{name}}</h2>
    <p :class='classesText' class='card-ui__text'>{{text}}</p>
  </div>
</template>

<script>
import OptionsCard from './CardUI'
export default {
  props:{
    img:{
      type:String,
      default:''
    },
    name:{
      type:String,
      default:''
    },
    text:{
      type:String,
      default:''
    },
    options:{
      type:OptionsCard,
      default:{}
    },
    size:{
      type:String,
      validator(value){return ['small','large'].includes(value)},
      default:'large'
    }
  },
  computed:{
    isSmall(){
      return this.size=='small'
    },
    classesImg(){
      return{
        'gradient-frame':this.options.glow
      }
    },
    classesGeneral(){
      return{
        'card-ui_small':this.isSmall
      }
    },
    classesName(){
      return{
        'gradient-text_horizontal':this.options.gradient,
        'card-ui__name_small':this.isSmall
      }
    },
    classesText(){
      return{
        'card-ui__text_small':this.isSmall
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
 @require '~@/assets/stylus/index.styl';
  .card-ui
    max-width 580px
    &_small
      max-width 373px
    &__img
      width 100%
      img
        width 100%
    &__name
      font-weight: 700;
      font-size: 53px;
      &_small
        font-size: 24px;
    &__text
      font-size: 19px;
      &_small
        font-weight: 400;
        font-size: 16px;
 </style>