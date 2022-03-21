<template>
 <div class='main'>
        <animate-wrapper>
                <v-container class='container__lg home'>
                    <v-row>
                        <v-col md='6' xs='12'>
                            <div class='home__content'>
                                <h3 class='home__header'>
                                    Foil.Network
                                    <span class='home__header gradient-text'>Bounty Hunt & Airdrop</span>
                                </h3>
                                <v-col xs='12' md='6'>
                                    <button-UI class='home__btn' fill gradient label='Actual Airdrops'/>
                                </v-col>
                            </div>
                            <p class='home__text'>Earn FOIL by participating in the bounty campaign. The Blockchain Interactions crypto rewards event brings the important mission of scalability and sustainability of the FOIL elastic blockchain.</p>
                        </v-col>
                    </v-row>
                </v-container>
        </animate-wrapper>

        <div class='section1'>

            <v-container class='container__lg'>
                <v-row>
                    <v-col/>
                    <v-col cols='12' md='8' lg='6'>
                        <p class='section1__text'>Test the FOIL NFT storage, send and receive encrypted messages, transactions and save NFT content over blockchain and bring the crypto benchmark tests of FOIL Network live! 1,250,000 FOIL are reserved for the crypto airdrop and bounty participants.</p>
                        <v-row class='row'>
                            <v-col cols='9'>
                                <h4 class='section1__header section1__header gradient-text_horizontal'>Join FOIL Blockchain Interactions and earn FOIL crypto.</h4>
                            </v-col>
                            <v-col class='d-flex justify-center align-center'>
                                <button-scroll/>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>

        <div class='section2'>
            <v-container class='container__lg'>
                <v-row>
                    <v-col sm='12' md='6' v-for='(card,index) in cards' :key='index'>
                        <card-UI :options='{gradient:true,glow:true}' v-bind='card'/>
                    </v-col>
                </v-row>
            </v-container>
        </div>
 </div>
</template>

<script>
import AnimateWrapper from './components/index/background.vue'
import ButtonScroll from './components/index/buttonScroll.vue'

const cards=[
    {
        name:'Actuail Airdrop titile',
        img:require("@/assets/img/Card/Card1.png"),
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name:'Actuail Airdrop titile',
        img:require("@/assets/img/Card/Card2.png"),
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]

export default {
    components:{AnimateWrapper,ButtonScroll},
    data(){
        return{cards}
    }
}
</script>

<style lang="stylus" scoped>
 @require '~@/assets/stylus/index.styl';
.main
    .home
        height:100%
        width:100%
        +breakpoint(xs-only){padding-bottom:50px};
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
    .section1
        background:$dark.bg1
        &__header
            setFont('adineuePROCyr',bold,normal,44px,42px)
            &_gradient
                gradienLinear('text',$dark.secondary -9.98%,$dark.primary 62.2%,262.17deg)
        &__text
            setFont('LabGrotesque',normal,normal,19px,32px)
</style>
