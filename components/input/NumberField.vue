<template>
    <TextFieldUI v-model="inputVal" mask="+7 (###) ###-##-##" v-bind="$props"/>
</template>

<script>
export default {
    data(){
        return{

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
    },

    props:{
        placeholder:{type:String,default:''},
        label:{type:String,default:''},
        outlined:{type:Boolean,default:false},
        fill:{type:Boolean,default:false},
        value:{default:null},
        rules:{type:Array,default:()=>{return []}},
        mask:{type:String,default:''}
    },
}
</script>

