package timer.backend.websocket

import groovy.util.logging.Slf4j
import io.micronaut.websocket.WebSocketBroadcaster
import io.micronaut.websocket.WebSocketSession
import io.micronaut.websocket.annotation.OnClose
import io.micronaut.websocket.annotation.OnMessage
import io.micronaut.websocket.annotation.OnOpen
import io.micronaut.websocket.annotation.ServerWebSocket
import timer.backend.service.TimerService

@Slf4j
@ServerWebSocket("/ws/timer")
class TimerBackendWebSocket {

    private WebSocketBroadcaster broadcaster

    private TimerService timerService

    TimerBackendWebSocket(WebSocketBroadcaster broadcaster, TimerService timerService) {
        this.broadcaster = broadcaster
        this.timerService = timerService
    }

    @OnOpen
    void onOpen(WebSocketSession session) {
        log.info "Client opened socked ${session.id}"
        sendElapsed(timerService.elapsed)
    }

    @OnMessage
    void onMessage(String message, WebSocketSession session) {
    }

    @OnClose
    void onClose(WebSocketSession session) {
        log.info "Client gone again"
    }

    void sendElapsed(String elapsed) {
        broadcaster.broadcastAsync(elapsed)
    }
}