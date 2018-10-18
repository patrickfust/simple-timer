package timer.backend.service

import io.micronaut.scheduling.annotation.Scheduled
import timer.backend.websocket.TimerBackendWebSocket

import javax.inject.Singleton

@Singleton
class TimerScheduleService {

    private TimerBackendWebSocket timerBackendWebSocket

    private String lastElapsed = ''

    private TimerService timerService

    TimerScheduleService(TimerService timerService, TimerBackendWebSocket timerBackendWebSocket) {
        this.timerService = timerService
        this.timerBackendWebSocket = timerBackendWebSocket
    }

    @Scheduled(fixedRate = "1s")
    void everySecond() {
        String elapsed = timerService.elapsed
        if (elapsed != lastElapsed) {
            timerBackendWebSocket.sendElapsed(elapsed)
            lastElapsed = elapsed
        }
    }

}
