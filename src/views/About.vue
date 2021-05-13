<template>
  <div class="about container">
    <div class="split">
      <h2 class="head"> {{ heading }}</h2>
      <span class="sub"> {{ subHeading }} </span>
    </div>
    <div class="split">
      <div class="skill-wrap">
        <grid />
        <div class="icon-wrap active">
          <icon-html />
          <icon-css />
          <icon-sass />
          <icon-js />
          <icon-vue />
          <icon-react />
          <icon-xd />
          <icon-git />
          <icon-vscode />
          <icon-bitbucket />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {about} from '@/content/views/about.js'
import {mapGetters} from "vuex"
import grid from '../svg/grid.vue';
import {defineAsyncComponent,defineComponent} from "vue";
const iconComponents = {};
const ComponentContext = require.context('@/svg', true, /icon.*\.vue$/i,"sync");
ComponentContext.keys().forEach( componentFilePath => {
  const filename = componentFilePath.split('./').pop().replace('.vue','')
  iconComponents[filename] = defineAsyncComponent(() => 
    //import each component dynamically
    import("@/svg/" + filename + ".vue")
  );
})
export default defineComponent({
  components: { 
    grid,
    ...iconComponents
  },
  computed:{
    ...mapGetters([
				'language'
		]),
    heading(){
      return about[this.language].head.toUpperCase();
    },
    subHeading(){
      return about[this.language].sub
    }
  }
})
</script>

<style 
  lang="scss" 
  scoped
  src="@/style/views/about.scss"
>
</style>