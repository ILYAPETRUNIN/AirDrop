<template>
        <v-menu class='main-langSelect' offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" class='main-langSelect__btn' text x-small>{{currentLang}}</v-btn>
            </template>

            <v-list >
                <v-list-item  @click='changeLang(lang)' link v-for="(lang, index) in getListLang" :key="index">
                    <v-list-item-title class='main-langSelect__list'>{{lang}}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
</template>

<script>
const listLang=['EN','RU']

export default {
    data(){
        return{
            currentLang:'EN'
        }
    },
    computed:{
        getListLang(){
            return listLang
        }
    },
    methods:{
        changeLang(lang){
            this.currentLang=lang
        }
    }
}
</script>

<style lang="stylus" scoped>
    .main-langSelect
        font-size: 12px;
        &__btn,&__list
            font-size: 12px;
        &__btn
            width 48px
</style>