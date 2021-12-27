<template>
  <v-app dark class='app'>
    <mainHeader/>
    
    <v-main>
        <Nuxt />
    </v-main>
   
  </v-app>
</template>

<script>
import mainHeader from '@/components/mainLayout/MainHeader.vue'

export default {
  components:{
    mainHeader
  },
  data () {
    return {
     
    }
  }
}
</script>

<style lang="stylus">
  
</style>
