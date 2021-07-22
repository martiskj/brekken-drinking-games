<template>

    <div class="container">
        
        <div v-if="consume.length === 0">
            <h1>Scan to get started!</h1>
        </div>

        <div v-else>
            <h1>Total: {{ total }}</h1>

            <ol>
                <li v-for="c in consume" :key="c.name">
                    <p>{{ c.name }} (<span class="bold">{{ c.count }}</span>)</p>
                </li>
            </ol>
        </div>

    </div>

</template>

<script lang="ts">
import { Beverage } from '@/models/beverage';
import { Vue, Component } from 'vue-property-decorator';
import * as _ from 'lodash';

@Component
export default class ConsumeOverview extends Vue {
    
    get consume(): { name: string, count: number }[] {
        return _.chain((this.$store.state.app.consume as Array<Beverage>))
            .groupBy(x => x.name)
            .map((value, key) => ({ name: key, count: value.length }))
            .orderBy(x => x.count)
            .reverse()
            .take(10)
            .value();
    }

    get total() {
        return this.$store.state.app.consume.length;
    }

}
</script>

<style scoped lang="scss">

.container {
    padding-top: 200px;
    height: 70vh;
    width: 100%;
}

h1 {
    padding-left: 150px;

    width: 100%;
    border-bottom: 2px solid $--color-pri;
}

ol {
    padding-left: 150px;
    position: relative;
    left: 50px;
    list-style: upper-roman;
    font-size: 1.2rem;
}

.bold {
    font-weight: 600;
}
</style>