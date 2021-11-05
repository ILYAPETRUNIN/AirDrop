<template>
    <button v-ripple :disabled='disabled'  :class='{outline:outline,fill:fill,disabled:disabled}' class='button'>{{label}}</button>
</template>

<script>
export default {
    props:{
        label:{type:String,default:''},
        outline:{type:Boolean,default:false},
        disabled:{type:Boolean,default:false},
        fill:{type:Boolean,default:false}
    }
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/mixins/index.styl';

    .button
        width:100%
        border-radius 7px
        setFont('adineuePROCyr',bold,normal)
        font-size: 21px;
        min-height 63px
        padding:0px 50px!important
    
    .fill
        gradienLinear('block',#21D4FD -9.98%,#E40ECF 62.2%,262.17deg)

    .outline
        position:relative;
        display:inline-block;
        gradienLinear('text',#21D4FD -9.98%,#E40ECF 62.2%,262.17deg)
        &::before 
            content:"";
            absolute()
            border-radius:7px; 
            padding:1px; 
            gradienLinear('block',#21D4FD -9.98%,#E40ECF 62.2%,262.17deg)
            -webkit-mask: 
                linear-gradient(#fff 0 0) content-box, 
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: destination-out; 
            mask-composite: exclude;             
        &::after
            content ''
            absolute()
            border-radius:7px;
            z-index -1
            opacity 0
            gradienLinear('block',#21D4FD -9.98%,#E40ECF 62.2%,262.17deg)
            transition opacity 1s
        &:hover
            z-index 1
            background transparent
            color:white
            background-clip unset
            background-image:none
            &::after
                opacity 1
    
    .disabled
            border: 1px solid #FFFFFF
            opacity: 0.3;
</style>