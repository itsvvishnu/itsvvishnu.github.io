<template>
    <div class="wrapper">
        <div class="icon" @click.prevent="() => dropdown = !dropdown" v-click-outside="()=> dropdown = false">
            <switcher />
            <span>{{ currentLang }}</span>
        </div>
        <div :class="['drop-down',{'active':dropdown}]" v-if="dropdown">
            <ul>
                <li
                    v-for="(lang,index) in langOptions"
                    :key="lang.value+index"
                >
                    <label :for="lang.value" class="radio">
                        <input 
                            type="radio" 
                            class="hidden" 
                            name="language" 
                            :id="lang.value" 
                            :value="lang.value" 
                            :checked="isChecked(lang)" 
                            @change="changeLanguage(lang)"
                        >
                        <span class="label">
                            <span class="inner"></span>
                        </span>
                        {{lang.name}}
                    </label>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import switcher from "@/svg/switcher.vue"
export default {
    data(){
        return {
            dropdown:false,
            currentLang:'EN',
            langOptions:[
                {
                    name:'English (US)',
                    symbol:'EN',
                    value:'en'
                },
                {
                    name:'Español',
                    symbol:'ES',
                    value:'es'
                },
                {
                    name:'Français',
                    symbol:'FR',
                    value:'fr'
                },
                {
                    name:'Português',
                    symbol:'PR',
                    value:'pr'
                }
            ]
        }
    },
    components:{
        switcher
    },
    methods:{
        changeLanguage(lang){
            this.dropdown = !this.dropdown
            this.currentLang = lang.symbol
            this.$store.dispatch('SWITCH_LANGUAGE',lang.value)
        },
        isChecked(lang){
            if(this.currentLang == lang.symbol) return true
            return false
        }
    }
}
</script>
<style 
    scoped 
    lang="scss"
    src="@/style/components/language-selector.scss"
>
</style>