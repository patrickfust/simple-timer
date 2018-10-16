<template>
    <div>
        <timer-control v-if="showTimerControl" />
        <timer-status />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TimerStatus from '@/components/TimerStatus.vue'; // @ is an alias to /src
import TimerControl from '@/components/TimerControl.vue';
import {timerBackendService} from "@/services/timer-backend.service";

@Component({
  components: {
      TimerControl,
      TimerStatus,
  },
})
export default class Home extends Vue {

    private showTimerControl = false;

    private mounted() : void {
        this.showTimerControl = (location.hostname.toLocaleLowerCase() == 'localhost');
        timerBackendService.initializeWebSocket();
    }

}
</script>
