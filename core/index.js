import Vue from 'vue'
import ButtonUI from './ButtonUI.vue'

const components = { ButtonUI }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})