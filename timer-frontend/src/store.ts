import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        timerStatusText: '',
        showTimerControl: false,
    },
    getters: {
        getTimerStatusText: (state) => {
            return state.timerStatusText;
        },
        getShowTimerControl: (state) => {
            return state.showTimerControl;
        },
    },
    mutations: {
        updateTimerStatusText: (state, newText) => {
            state.timerStatusText = newText;
        },
        updateShowTimerControl: (state, newState) => {
            state.showTimerControl = newState;
        },
    },
    actions: {
    },
});
