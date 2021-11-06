import Vue from 'vue'
import ButtonUI from './ButtonUI.vue'
import TextFieldUI from './TextFieldUI.vue'

const components = { ButtonUI,TextFieldUI}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})