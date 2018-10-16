package timer.backend.controller

import groovy.transform.CompileStatic
import io.micronaut.http.MediaType
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.http.annotation.Produces
import timer.backend.service.TimerService

@CompileStatic
@Controller("/timer")
class TimerAdminController {

    private TimerService timerService

    TimerAdminController(TimerService timerService) {
        this.timerService = timerService
    }

    @Get("/stop")
    @Produces(MediaType.TEXT_PLAIN)
    String stopTimer() {
        timerService.stopTimer()
        return "OK"
    }

    @Get("/start")
    @Produces(MediaType.TEXT_PLAIN)
    String startTimer() {
        timerService.startTimer()
        return "OK"
    }

}
