package timer.backend.service

import javax.inject.Singleton
import java.time.Duration
import java.time.LocalTime

@Singleton
class TimerService {

    private LocalTime startTime = null

    void startTimer() {
        startTime = LocalTime.now()
    }

    void stopTimer() {
        startTime = null
    }

    String getElapsed() {
        if (!startTime) return 'Stopped'
        Duration duration = Duration.between(startTime, LocalTime.now())
        String durationFormatted = String.format("%02d:%02d:%02d",
                duration.toHours() % 24,
                duration.toMinutes() % 60,
                duration.getSeconds() %60)
        return durationFormatted
    }

}
