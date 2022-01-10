<template>
    <nav :class="{mobile:mobile}" class='menu'>
        <NuxtLink class='menu__link' :to='nav.name' v-for='nav in getNavList' :key='nav.name'>{{nav.title}}</NuxtLink>
    </nav>
</template>

<script>

let navList=[
    {name:'Foil',title:'Foil'},
    {name:'Learn',title:'Learn'},
    {name:'Blog',title:'Blog'},
    {name:'Product',title:'Product'},
    {name:'Community',title:'Community'},
    {name:'BlockExplorer',title:'Block Explorer'},
    {name:'ContactUs',title:'Contact Us'},
]

export default {
    props:{
        mobile:{type:Boolean,default:false}
    },
    computed:{
        getNavList(){
            return navList
        }
    }
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/index.styl';
    .menu
        flexy(row,space-between,center,nowrap)
        setFont('adineuePROCyr',normal,normal,14px)
        &__link
            hoverColor('text',$dark.four,$dark.secondary,0.5s)
            margin:0px 10px

    .mobile
        flexy(column,center,center,nowrap)
        setFont('adineuePROCyr',normal,normal,30px)

            
</style>