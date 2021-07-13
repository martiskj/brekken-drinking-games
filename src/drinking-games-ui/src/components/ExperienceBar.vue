<template>

  <div class="container">

    <div class="loading-bar">
      <div class="percentage" :style="{ 'width' : 'calc(' + progress + '% - 2px)' }"></div>
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
  width: $--page-width + 2px;
  height: 15px;
}

.percentage {
  position: absolute;
  top: 1px; left: 1px;
  background: $--color-pri;
  background: linear-gradient(90deg, $--color-thi 0%, $--color-pri 100%);
  height: calc(100% - 2px);
  transition: width .5s ease-out;
}


</style>