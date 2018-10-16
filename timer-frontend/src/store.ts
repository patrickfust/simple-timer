import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        timerStatusText: '',
    },
    getters: {
        getTimerStatusText: (state) => {
            return state.timerStatusText;
        },
    },
    mutations: {
        updateTimerStatusText: (state, newText) => {
            state.timerStatusText = newText;
        },
    },
    actions: {
    },
});
