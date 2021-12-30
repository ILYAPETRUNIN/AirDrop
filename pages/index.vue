<template>
 <div class='main'>
        <home-background>
            <div class='home'>
                <v-container class='container__lg'>
                    <v-row>
                        <v-col md='6' xs='12'>
                            <div class='home__content'>
                                <h3 class='home__header'>
                                    Foil.Network
                                    <span class='home__header_gradient'>Bounty Hunt & Airdrop</span>
                                </h3>
                                <v-col xs='12' md='6'>
                                    <ButtonUI class='home__btn' fill gradient label='Actual Airdrops'/>
                                </v-col>
                            </div>
                            <p class='home__text'>Earn FOIL by participating in the bounty campaign. The Blockchain Interactions crypto rewards event brings the important mission of scalability and sustainability of the FOIL elastic blockchain.</p>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </home-background> 
 </div>
</template>

<script>
import HomeBackground from './components/index/background.vue'
export default {
    components:{HomeBackground}
}
</script>

<style lang="stylus" scoped>
 @require '~@/assets/stylus/index.styl';
.main
    .home
        height:100vh
        width:100vw
        flexy(row,center,flex-end,nowrap);
        &__content
            +breakpoint(xs-only){
                height:100vh
                flexy(row,flex-end,flex-end,wrap);
            }
        &__btn
            margin-top:56px
        &__header
            setFont('adineuePROCyr',bold,normal,79px,75px)
            max-width:456px
            +breakpoint(xs-only){setFont('adineuePROCyr',bold,normal,49px,45px) }
            &_gradient
                gradienLinear('text',$dark.secondary -9.98%,$dark.primary 62.2%,262.17deg)
        &__text
            margin-top:10vh;
            setFont('adineuePROCyr',bold,normal,36px,55px)
            +breakpoint(xs-only){display:none}
</style>
