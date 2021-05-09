<template>
    <div class="nav">
        <nav class="container">
            <div class="split">
                <div class="img-wrappper">
                    <img :src="logo" alt="logo">
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
import logo from '@/assets/logo.svg'
import {navbar , routes} from '@/content/components/navbar.js'
import {mapGetters} from "vuex"
export default {
  name: 'NavBar',
  data(){
    return{
        logo
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
  created(){
      setTimeout(() => {
        this.$store.dispatch('SWITCH_LANGUAGE','es')
      }, 2000);
  }
}
</script>

<style 
    scoped 
    lang="scss"
    src="@/style/components/navbar.scss"
>
</style>
