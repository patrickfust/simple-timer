<template>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '../store';
import router from '../router';

@Component({
  components: {
  },
})
export default class Admin extends Vue {

    private mounted(): void {
        console.log('admin called, you may now use timerControls');
        store.commit('updateShowTimerControl', true);
        router.push('/');
    }

}
</script>
