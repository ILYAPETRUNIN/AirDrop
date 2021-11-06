<template>
    <TextFieldUI  v-model="inputVal" :type='(showPass) ? "text" : "password"' v-bind="$props" >
        <template v-slot:append>
            <v-icon :color='(!isError) ? "secondary" : "error"' @click='showPass=false' v-if='showPass'>mdi-eye</v-icon>
            <v-icon :color='(!isError) ? "secondary" : "error"' @click='showPass=true' v-else>mdi-eye-off</v-icon>
        </template>
    </TextFieldUI>  
</template>

<script>
export default {
    data(){
        return{
            showPass:false,
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