<template>
  <div id="nav">
    <nav-bar/>
  </div>
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  data(){

  },
  components:{
    'nav-bar':NavBar
  }
}
</script>
<style 
  lang="scss"
  src="@/style/app.scss"
  >
</style>
