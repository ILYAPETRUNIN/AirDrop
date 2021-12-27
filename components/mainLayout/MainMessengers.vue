<template>
    <div    class='main-messengers'>
        <a class='main-messengers__link' href="" v-for='messenger in getMessengers' :key='messenger.name'>
            <svg class='main-messengers__icon' height="22" width="22" fill='white'><use :xlink:href="require('@/assets/icons.svg')+'#messagers.'+messenger.name"></use></svg>
        </a>
    </div>
</template>

<script>

const messengersList=[
    {name:'nop',link:''},
    {name:'telegram',link:''},
    {name:'twitter',link:''},
]

export default {
    computed:{
        getMessengers(){
            return messengersList
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
        &__icon
            hoverColor('icon',white,$dark.secondary,0.5s)
</style>