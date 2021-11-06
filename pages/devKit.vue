<template>
    <div>
        <div class='my-container'>
            <ButtonUI :style='{marginRight:"10px"}' fill gradient label='Actual Airdrops'/>
            <ButtonUI :style='{marginRight:"10px"}' fill label='Actual Airdrops'/>
            <ButtonUI :style='{marginRight:"10px"}' fill label='Actual Airdrops'>
                <template v-slot:suffix>
                    <svg fill='red' height="10" width="16"><use xlink:href="~assets/icons.svg#arrow-right"></use></svg>
                </template>
            </ButtonUI>   
            <ButtonUI :style='{marginRight:"10px"}' outline label='Actual Airdrops'/>
            <ButtonUI :style='{marginRight:"10px"}' gradient outline label='Actual Airdrops'/>
            <ButtonUI disabled label='Actual Airdrops'/>  
        </div>

        <div class='my-container'>
            <NumberField :rules='["required"]' v-model='numberField' outlined label='Phone Number'/>
            <PasswordField :rules='["required"]' v-model='passwordField' outlined label='Password'/>
            <TextFieldUI :rules='["required"]' outlined  label='Your Name'>
                <template v-slot:append>
                    <svg height="24" width="24"><use xlink:href="~assets/icons.svg#pen"></use></svg>
                </template>
            </TextFieldUI>    
        </div>
    </div>
</template>

<script>
import NumberField from '@/components/input/NumberField.vue'
import PasswordField from '@/components/input/PasswordField.vue'
export default {
    components:{
        NumberField,
        PasswordField
    },
    data(){
        return{
            numberField:null,
            passwordField:null
        }
    }
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/index.styl';
    
    .my-container
        width 100%
        padding 50px
        flexy(row,center,center,nowrap)
        +breakpoint(md-and-down){
            flex-wrap: wrap
        }
</style>