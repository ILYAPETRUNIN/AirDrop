<template>
  <v-app dark class='app'>
    <Header/>
    
    <v-main>
        <Nuxt />
    </v-main>
   
  </v-app>
</template>

<script>
import Header from '@/components/mainLayout/header.vue'

export default {
  components:{
    Header
  },
  data () {
    return {
     
    }
  }
}
</script>

<style lang="stylus">
  
</style>
