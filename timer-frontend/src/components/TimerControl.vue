<template>
    <div class="timer-control">
        <b-button-group>
            <b-button variant="primary" @click="startTimer">
                Start
            </b-button>
            <b-button variant="secondary" @click="stopTimer">
                Stop
            </b-button>
        </b-button-group>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { timerBackendService } from '@/services/timer-backend.service';

@Component
export default class TimerControl extends Vue {

    private startTimer() {
        timerBackendService.startTimer();
    }

    private stopTimer() {
        timerBackendService.stopTimer();
    }

}
</script>

<style lang="scss">
    .timer-control {
        float: right;
        z-index: 10;
        position: relative;
    }
</style>