<template>
    <div :class='{mobile:mobile}' class='main-messengers'>
        <a class='main-messengers__link' href="" v-for='messenger in getMessengers' :key='messenger.name'>
            <div  :style='{background:getRndColor()}' class='main-messengers__link_circle' v-if='circle'>
                 <svg height="28" width="28" fill='white'><use :xlink:href="require('@/assets/icons.svg')+'#messagers.'+messenger.name"></use></svg>
            </div>
            <svg v-else class='main-messengers__icon' height="22" width="22" fill='white'><use :xlink:href="require('@/assets/icons.svg')+'#messagers.'+messenger.name"></use></svg>
        </a>
    </div>
</template>

<script>

const messengersList=[
    {name:'nop',link:''},
    {name:'telegram',link:''},
    {name:'twitter',link:''},
]

const color=['#BA0E61','#0BB2D9','#1F60C1','#2085BE']

export default {
    data(){
        return{
            color
        }
    },
    props:{
        mobile:{type:Boolean,default:false},
        circle:{type:Boolean,default:false}
    },
    
    computed:{
        getMessengers(){
            return messengersList
        },
    },
    methods:{
        getRndColor(){
            const rndIndex=Math.floor(Math.random()*this.color.length);
            const rndColor=this.color[rndIndex];
            this.color.splice[rndIndex,1];

            return rndColor
        }
    }
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/index.styl';
    .main-messengers
        flexy(row,center,center,nowrap)
        &__link
            &:not(:last-child)
                margin-right 17.28px;
            flexy(row,center,center,nowrap)
            &_circle
                flexy(row,center,center,nowrap)
                border-radius:100%;
                width:60px;
                height:60px;
        &__icon
            hoverColor('icon',white,$dark.secondary,0.5s)
    .mobile
        width:70%
        flexy(row,space-between,center,nowrap)
</style>