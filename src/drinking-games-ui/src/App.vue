<template>

  <div id="app">
    <div class="level-wrapper">
      
      <div class="level-info">
        <p>Level: <span class="level">{{this.character.level}}</span></p>
        <p>Exp: {{ this.character.currentExp}} / {{ this.character.nextLevelExp }}</p>
      </div>

      <ExperienceBar :progress="progress" />
      <ExperienceInput />

      <button @click="character.currentExp += 10">Drink!</button>
    </div>
  </div>

  <!-- https://codepen.io/AfroDev/pen/gbXWjQ -->
  <!-- https://www.youtube.com/watch?v=4cMlXcNgKec -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ExperienceBar from './components/ExperienceBar.vue'
import ExperienceInput from './components/ExperienceInput.vue'

@Component({
  components: {
    ExperienceBar,
    ExperienceInput
  },
})
export default class App extends Vue {

  character: any = {
    level: 0,
    currentExp: 0,
    nextLevelExp: 100
  }

  get progress(): number {
    return (this.character.currentExp / this.character.nextLevelExp) * 100;
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
  text-align: center;
  color: $--color-pri;
  margin-top: 60px;
}

.level-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.level-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  font-size: 1.2em;
}

.level {
  font-weight: bold;
  font-size: 1.4rem;
}

button {
  font-family: $--font-family;
  margin-top: 20px;
  color: $--color-pri;
  border: 3px solid $--color-pri;
  background-color: $--color-bac;
  height: 40px;
  width: 120px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  
  &:hover {
    background-color: $--color-pri;
    color: $--color-bac;
  }
}

</style>
