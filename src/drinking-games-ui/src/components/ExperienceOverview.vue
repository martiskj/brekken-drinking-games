<template>

    <div class="level-wrapper">

        <div class="level-info">
            <p>Level: <span class="level">{{this.$store.state.app.level}}</span></p>
            <p>Exp: {{ this.currentExp }} / {{ this.nextLevelExp }}</p>
        </div>

        <ExperienceBar :progress="progress" />
    </div>


</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import ExperienceBar from './ExperienceBar.vue';

@Component({
    components: { 
        ExperienceBar
    }
})
export default class ExperienceOverview extends Vue {
  
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

<style lang="scss" scoped>

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
</style>