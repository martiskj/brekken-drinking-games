import Vue from 'vue'
import Vuex from 'vuex'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Beverage } from './models/beverage';

Vue.use(Vuex)

@Module
export class ApplicationStore extends VuexModule {
    
    private expToNextLevelTable: Map<number, number> = new Map([
        [0, 100],
        [1, 150],
        [2, 200],
        [3, 250],
        [4, 300],
        [5, 350],
    ]);

    public consume: Array<Beverage> = []
    public level = 0;

    get expNextLevel(): number {
        return this.expToNextLevelTable.get(this.level)!;
    }

    get expCurrent(): number {
        const totalExp = this.consume.reduce((sum, current) => sum + Math.floor(current.percentage * current.volume / 10), 0);

        let sum = 0;

        this.expToNextLevelTable.forEach((value, key) => {
            if (key < this.level) {
                sum += value;
            }
        })

        return totalExp - sum;
    }

    @Mutation
    ADD_CONSUME(beverage: Beverage): void {
        this.consume.push(beverage);
    }

    @Mutation
    LVL_UP(){
        this.level += 1;
    }

    @Action
    AddConsume(beverage: Beverage): Beverage {
        this.context.commit('ADD_CONSUME', beverage);

        if (this.expCurrent >= this.expNextLevel)
        {
            this.context.commit('LVL_UP');
        }

        return beverage;
    }

}

export default new Vuex.Store({
    modules: {
        app: ApplicationStore
    }
})