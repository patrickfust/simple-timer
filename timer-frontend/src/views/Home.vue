<template>
    <div>
        <timer-control v-if="$store.getters.getShowTimerControl" />
        <timer-status />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TimerStatus from '@/components/TimerStatus.vue'; // @ is an alias to /src
import TimerControl from '@/components/TimerControl.vue';
import {timerBackendService} from '@/services/timer-backend.service';

@Component({
  components: {
      TimerControl,
      TimerStatus,
  },
})
export default class Home extends Vue {

    private mounted(): void {
        timerBackendService.initializeWebSocket();
    }

}
</script>
