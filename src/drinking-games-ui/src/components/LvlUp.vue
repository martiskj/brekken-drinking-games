<template>
    <div class="component-container">

        <h1 :class="{ 'big' : isBig }">Level up!</h1>

    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LvlUp extends Vue {
    
    private isBig = false;

    mounted(): void {
        setTimeout(() => this.isBig = true, 100);
    }
}
</script>

<style lang="scss" scoped>

.component-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        transition: all linear 1s;

        &.big {
            font-size: 8rem;
        }
    }


}

</style>