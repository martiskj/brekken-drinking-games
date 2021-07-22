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

    private consume: Array<Beverage> = [
        {
            barcode: "7329234",
            volume: 50,
            percentage: 4.7
        }
    ]

    public level = 1;
    public expCurrenta = 40;

    get expNextLevel(): number {
        return this.expToNextLevelTable.get(this.level)!;
    }

    get expCurrent(): number {
        return this.consume.reduce((sum, current) => sum + Math.floor(current.percentage * current.volume / 10), 0);
    }

    @Mutation
    ADD_CONSUME(beverage: Beverage): void {
        this.consume.push(beverage);
    }

    @Action({ commit: 'ADD_CONSUME'})
    AddConsume(beverage: Beverage): Beverage {
        return beverage;
    }

}

export default new Vuex.Store({
    modules: {
        app: ApplicationStore
    }
})