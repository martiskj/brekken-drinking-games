<template>

  <div id="app" class="container">
    <div class="flex-container">

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
import ExperienceOverview from './components/ExperienceOverview.vue'
import ExperienceInput from './components/ExperienceInput.vue'

@Component({
  components: {
    ConsumeOverview,
    ExperienceOverview,
    ExperienceInput
  },
})
export default class App extends Vue {

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

.flex-container {
}

</style>
