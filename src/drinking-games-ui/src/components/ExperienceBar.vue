<template>

  <div class="container">

    <div class="loading-bar">
      <div class="percentage" :style="{ 'width' : progress + '%' }"></div>
    </div>

  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ExperienceBar extends Vue {

  @Prop() progress: number;

}
</script>

<style lang="scss" scoped>

.loading-bar {
  position: relative;
  width: 100%;
  height: 12px;
  overflow: hidden;
}

.percentage {
  background: $--color-pri;
  height: calc(100% - 2px);
  transition: width .5s ease-out;
}


</style>