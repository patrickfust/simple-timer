<template>
    <h1 class="jumbotron-heading centered fillTextWidth">{{ $store.getters.getTimerStatusText }}</h1>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TimerStatus extends Vue {

}
</script>

<style lang="scss">
    .centered {
        display: flex;
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }
    .fillTextWidth {
        font-size: 20vw;
        background-color: #494949;
        color: white;
        font-family: "Courier",monospace;
        z-index: 5;
        position: fixed;
    }
</style>