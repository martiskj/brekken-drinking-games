<template>

    <div class="wrapper" >
      <input type="text" class="exp-input" />
    </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ExperienceInput extends Vue {

}
</script>

<style lang="scss" scoped>

.wrapper {
    width: $--page-width;
}

input {
    margin-top: -3px;
    width: 100%;
    height: 50px;
    background-color: $--color-bac;
    border: 2px solid $--color-pri;
}

</style>