<template>
    <button 
        v-ripple 
        :disabled='disabled'  
        :class='{outline_gradient:(outline && gradient),
                outline:(outline && !gradient),
                fill_gradient:(fill && gradient),
                fill:(fill && !gradient),
                disabled:disabled}' 
        class='button'>
            <slot name="prefix"></slot>
                {{label}}
            <slot name="suffix"></slot>    
    </button>
</template>

<script>
export default {
    props:{
        label:{type:String,default:''},
        outline:{type:Boolean,default:false},
        disabled:{type:Boolean,default:false},
        fill:{type:Boolean,default:false},
        gradient:{type:Boolean,default:false},
    }
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/index.styl';

    .button
        flexy(row,center,center,nowrap)
        width:100%
        border-radius 7px
        setFont('adineuePROCyr',bold,normal)
        +breakpoint(xs-only){font-size: 17px}
        font-size: 21px;
        min-height 56px
        svg
            margin-left:10px
    
    .fill
        background:$dark.secondary
        &_gradient
            gradienLinear('block',#21D4FD -9.98%,#E40ECF 62.2%,262.17deg)

    .outline
        background:transparent
        color:white
        border 1px solid white      
        &_gradient
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