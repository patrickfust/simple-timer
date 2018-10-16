package timer.backend.service

import io.micronaut.scheduling.annotation.Scheduled
import timer.backend.websocket.TimerBackendWebSocket

import javax.inject.Singleton

@Singleton
class TimerScheduleService {

    private TimerBackendWebSocket timerBackendWebSocket

    private TimerService timerService

    TimerScheduleService(TimerService timerService, TimerBackendWebSocket timerBackendWebSocket) {
        this.timerService = timerService
        this.timerBackendWebSocket = timerBackendWebSocket
    }

    @Scheduled(fixedRate = "1s")
    void everySecond() {
        String elapsed = timerService.elapsed
        timerBackendWebSocket.sendElapsed(elapsed)
    }

}
