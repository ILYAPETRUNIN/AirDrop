import Vue from 'vue'
import ButtonUI from './ButtonUI.vue'
import TextFieldUI from './TextFieldUI.vue'
import CardUI from './card/CardUI.vue'

const components = { ButtonUI,TextFieldUI,CardUI}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})