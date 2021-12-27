<template>
    <div  class='textField' :class='{textField_active:(inputVal!="" && fill),textField_fill:fill,textField_outlined:outlined,textField_error:isError}'>
        <label class='textField__label' for="input">{{label}}</label>
        <v-text-field @update:error='(e)=>{isError=e}' :type="type" :rules="getRules" v-model='inputVal' v-mask="mask"  id='input'  class='textField__input' color='secondary' :label="placeholder" single-line outlined>
            <template v-slot:append>
                <div class='marker' @click="toggleMarker">
                    <slot name='append'></slot>
                </div>
            </template>
        </v-text-field>
    </div>
</template>



<script>
import {rulesList} from '@/js/rulesValidation.js'

export default {
    data(){
        return{
            rulesList,
            isError:false
        }
    },
    computed:{
        inputVal:{
            get(){
                return this.value
            },
            set(val){
                this.$emit('input',val)
            }
        },
        
        getRules(){
            return this.rules.map((item)=>{return this.rulesList[item]})
        }
    },
    props:{
        placeholder:{type:String,default:''},
        label:{type:String,default:''},
        outlined:{type:Boolean,default:false},
        fill:{type:Boolean,default:false},
        value:{default:null},
        rules:{type:Array,default:()=>{return []}},
        mask:{type:String,default:''},
        type:{type:String,default:'text'}
    },

    methods:{
        toggleMarker(){
            this.$emit('toggleMarger')
        },
        updateError(e){
           this.$emit('updateError',e) 
        }
    }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index.styl';
    .textField
        svg,.v-icon
            fill:$dark.secondary 
            color:$dark.secondary 

        .error--text
            svg,.v-icon
                fill:$dark.error 
                color:$dark.error 

        &_outlined
            fieldset
                 border-color:$dark.secondary

            .v-input--is-focused
                .v-input__slot
                    background-color: $dark.third !important

        &_fill
            fieldset
                 border-color:transparent
            .v-input__slot
                background-color: $dark.third !important
            input
                color:white
                text-align:center
  
        
        &_active
            fieldset
                 border-color:$dark.secondary
            .v-input__slot
                 background-color: transparent !important
            input
                color:$dark.secondary !important
</style>

<style lang="stylus" scoped>
@import '~@/assets/stylus/index.styl';
    .textField
        width 100%

        &__label
            font-size: 15px;

        &__input
            margin-top:5px
            border-radius: 8px;
            font-size: 16px;
            setFont('adineuePROCyr',bold,normal)
            
    
    .marker
        cursor:pointer

</style>