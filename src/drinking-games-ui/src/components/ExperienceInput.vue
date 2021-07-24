<template>

    <div class="wrapper" >
      <input ref="consumeInput" v-model="barcode" @keyup.enter="submitBeverage" type="text" class="exp-input" />
    </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ExperienceInput extends Vue {

    barcode = "";

    mounted() {
        (this.$refs.consumeInput as HTMLElement).focus();
    }

    submitBeverage(): void {
        this.$store.dispatch('AddConsume', {
            barcode: this.barcode,
            name: "Frydenlund pilsner",
            volume: 50,
            percentage: 4.7
        })

        this.barcode = "";
    }
}
</script>

<style lang="scss" scoped>

.wrapper {
    width: 100%;
}

input {
    margin-top: -3px;
    width: 100%;
    height: 50px;
    background-color: $--color-bac;
    border: 2px solid $--color-pri;
    color: $--color-pri;
    font-size: 1.6rem;
    padding: 0 10px;
    outline:none;
}

</style>