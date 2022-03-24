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
                    <v-col class='d-flex justify-center' cols='12' md='6' v-for='(card,index) in cards' :key='index'>
                        <card-UI :options='{gradient:true,glow:true}' v-bind='card'/>
                    </v-col>
                </v-row>
            </v-container>
        </div>

        <div class='separator'></div>

        <div class='section3'>
            <v-container class='container__lg'>
                <h3 class='section3__header'>Completed Bounty Hunt & Airdrops</h3>
                <v-row>
                    <v-col class='d-flex justify-center' cols='12' md='6'  lg='4' v-for='(card,index) in cardSmall' :key='index'>
                        <card-UI size='small' v-bind='card'/>
                    </v-col>
                </v-row>
                <v-row class='section3__btn d-flex justify-center'>
                    <v-col cols='11' md='3' >
                        <ButtonUI  outline label='Load more'/>
                    </v-col>
                </v-row>
            </v-container>
    
        </div>

        <div class='section4'>
            <v-container>
                <v-row class='section4__header gradient-text_horizontal'>Subscribe to us and stay tuned!</v-row>
                    <v-form class='section4__form gradient-block_blue'>
                        <v-row>
                            <v-col md='9'  cols='12'><TextFieldUI solo :rules='["required"]' outlined  placeholder='Enter your e-mail'/></v-col>
                            <v-col md='3' cols='12'>
                                <ButtonUI  fill label='Send information'>
                                    <template v-slot:suffix>
                                        <svg fill='red' height="10" width="16"><use xlink:href="~assets/icons.svg#arrow-right"></use></svg>
                                    </template>
                                </ButtonUI> 
                            </v-col>
                        </v-row>
                    </v-form>
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

const cardSmall=[
    {
        name:'Completed Airdrop titile',
        img:require("@/assets/img/Card/Card1.png"),
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
        name:'Completed Airdrop titile',
        img:require("@/assets/img/Card/Card1.png"),
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
        name:'Completed Airdrop titile',
        img:require("@/assets/img/Card/Card1.png"),
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
        {
        name:'Completed Airdrop titile',
        img:require("@/assets/img/Card/Card1.png"),
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
        name:'Completed Airdrop titile',
        img:require("@/assets/img/Card/Card1.png"),
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
        name:'Completed Airdrop titile',
        img:require("@/assets/img/Card/Card1.png"),
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
        {
        name:'Completed Airdrop titile',
        img:require("@/assets/img/Card/Card1.png"),
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
        name:'Completed Airdrop titile',
        img:require("@/assets/img/Card/Card1.png"),
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
        name:'Completed Airdrop titile',
        img:require("@/assets/img/Card/Card1.png"),
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },

]

export default {
    components:{AnimateWrapper,ButtonScroll},
    data(){
        return{cards,cardSmall}
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
        &__text
            margin-top:10vh;
            setFont('adineuePROCyr',bold,normal,36px,55px)
            +breakpoint(xs-only){display:none}
    .section1
        background:$dark.bg1
        &__header
            setFont('adineuePROCyr',bold,normal,44px,42px)
        &__text
            setFont('LabGrotesque',normal,normal,19px,32px)

    .section2
        margin-top 100px
    .separator
        border: 1px solid #4C4A5F;
        margin 50px 150px
    .section3
        &__header
            margin-bottom 50px
        &__btn
            margin-top 90px
            margin-bottom 141px
            +breakpoint(xs-only){
                margin-bottom 60px
            }
    .section4
        &__header
            font-style: normal;
            font-weight: 700;
            font-size: 142px;
            line-height: 124px;
            margin-bottom 120px
            +breakpoint(xs-only){
                font-weight: 700;
                font-size: 49px;
                line-height: 45px;
                margin-bottom 60px
            };
        &__form
            width 100%
            position:relative
            border-radius: 8px;
            padding 50px
            padding-top 70px
            +breakpoint(xs-only){
                padding 5px
            };
            

</style>
