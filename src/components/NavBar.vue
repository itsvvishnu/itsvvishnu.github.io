<template>
    <div class="nav">
        <nav class="container">
            <div class="split">
                <div class="img-wrapper">
                    <logo />
                    <language-selector />
                </div>
            </div>
            <div class="split">
                <ul>
                    <li 
                        v-for="(menu,index) in menus"
                        :key="index"
                    >
                        <router-link :to="routes[index]">{{menu}}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import logo from '@/svg/logo'
import {navbar , routes} from '@/content/components/navbar.js'
import {mapGetters} from "vuex"
import LanguageSelector from '@/components/LanguageSelector'
export default {
  components: {
		'language-selector':LanguageSelector,
        logo
	},
  name: 'NavBar',
  data(){
    return{
    }
  },
  computed:{
		...mapGetters([
				'language'
		]),
		menus(){
			if(!(this.language)) return navbar.en
			else{
					return navbar[this.language]
			}
		},
		routes(){
			return routes
		}
  },
}
</script>

<style 
    scoped 
    lang="scss"
    src="@/style/components/navbar.scss"
>
</style>
