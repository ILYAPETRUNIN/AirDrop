<template>
    <v-menu class='main-langSelect' offset-y>
        <template v-slot:activator="{ on, attrs }">
                <v-btn icon>
                    <div class='profileBtn'>
                        <v-avatar class='profileBtn__avatar' color="third" size="30">
                                <p class='profileBtn__text'>Not</p>
                        </v-avatar>
                    </div>
                </v-btn>
        </template>

    </v-menu>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/index.styl';
    .profileBtn
        width 35px
        height 35px
        background url(@/assets/img/Ellipse/Ellipse1.jpg);
        background-size: cover;
        font-size 8px
        flexy(row,center,center,nowrap)
        &__text
            noMargin()    
  
</style>