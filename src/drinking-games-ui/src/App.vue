<template>

  <div id="app">
    <div class="level-wrapper">
      
      <div class="level-info">
        <p>Level: <span class="level">{{this.$store.state.app.level}}</span></p>
        <p>Exp: {{ this.currentExp }} / {{ this.nextLevelExp }}</p>
      </div>

      <ExperienceBar :progress="progress" />
      <ExperienceInput />

      <button @click="increase">Drink!</button>
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

  mounted() {
    console.log(this.$store);
  }

  increase() {
    this.$store.dispatch('AddConsume', {
        barcode: "7329234",
        volume: 50,
        percentage: 4.7
    })
  }

  get progress(): number {
    return (this.currentExp / this.nextLevelExp) * 100;
  }

  get currentExp(): number {
    return this.$store.getters.expCurrent;
  }

  get nextLevelExp(): number {
    return this.$store.getters.expNextLevel;
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
