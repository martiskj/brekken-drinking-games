<template>

  <div id="app" class="container">

    <div v-if="showLvlUp">
      <lvl-up />
    </div>

    <div v-else>

      <consume-overview />
      <experience-overview />
      <ExperienceInput />

    </div>
  </div>

  <!-- https://codepen.io/AfroDev/pen/gbXWjQ -->
  <!-- https://www.youtube.com/watch?v=4cMlXcNgKec -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ConsumeOverview from './components/ConsumeOverview.vue'
import LvlUp from './components/LvlUp.vue'
import ExperienceOverview from './components/ExperienceOverview.vue'
import ExperienceInput from './components/ExperienceInput.vue'

@Component({
  components: {
    ConsumeOverview,
    ExperienceOverview,
    ExperienceInput,
    LvlUp
  },
})
export default class App extends Vue {

  showLvlUp = false;

  mounted() {


    this.$store.subscribe((mutation, state) => {
      if (mutation.type == "LVL_UP") {
        
        this.showLvlUp = true;
        setTimeout(() => this.showLvlUp = false, 2000);

      }
    })
  }
}

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: $--color-bac;
  font-family: $--font-family;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $--color-pri;
}

.container {
  height: 100%;
  margin: 0 auto;
  width: $--page-width;
}

</style>
