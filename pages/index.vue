<template>
 <div class='main'>
        <home-background>
            <div class='home'>
                <div class='container__lg'>
                    <div class='home__content col-xs-12 col-sm-6'>
                        <div>
                            <h3 class='home__header'>
                                Foil.Network
                                <span class='home__header_gradient'>Bounty Hunt & Airdrop</span>
                            </h3>
                            <ButtonUI class='home__btn col-6' fill gradient label='Actual Airdrops'/>
                        </div>
                        <p class='home__text'>Earn FOIL by participating in the bounty campaign. The Blockchain Interactions crypto rewards event brings the important mission of scalability and sustainability of the FOIL elastic blockchain.</p>
                    </div>
                </div>
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
        &__btn
            margin-top:56px
            max-width:246px
        &__header
            setFont('adineuePROCyr',bold,normal,79px,75px)
            max-width:456px
            &_gradient
                gradienLinear('text',$dark.secondary -9.98%,$dark.primary 62.2%,262.17deg)
        &__text
            margin-top:10vh;
            setFont('adineuePROCyr',bold,normal,36px,55px)
</style>
