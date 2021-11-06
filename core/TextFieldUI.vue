<template>
    <div  class='textField' :class='{textField_outlined:outlined,textField_error:isError}'>
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
        svg
            fill:$dark.secondary 
        &_error
            svg
                fill:$dark.error 
        &_outlined
            fieldset
                 border-color:$dark.secondary
            .v-input--is-focused
                .v-input__slot
                    background-color: $dark.third !important
</style>

<style lang="stylus" scoped>
    .textField
        width 100%

        &__label
            font-size: 15px;
        &__input
            margin-top:5px
            border-radius: 8px;
    
    .marker
        cursor:pointer

</style>