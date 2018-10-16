package timer.backend.controller

import spock.lang.Specification
import io.micronaut.context.ApplicationContext
import io.micronaut.http.HttpRequest
import io.micronaut.http.client.RxHttpClient
import io.micronaut.runtime.server.EmbeddedServer
import spock.lang.AutoCleanup
import spock.lang.Shared

class TimerAdminControllerSpec extends Specification {

    @Shared
    @AutoCleanup
    EmbeddedServer embeddedServer = ApplicationContext.run(EmbeddedServer)

    @Shared
    @AutoCleanup
    RxHttpClient client = embeddedServer.applicationContext.createBean(RxHttpClient, embeddedServer.getURL())

    void "start timer"() {
        when:
        HttpRequest request = HttpRequest.GET('/timer/start')
        String rsp  = client.toBlocking().retrieve(request)

        then:
        rsp == 'OK'
    }

    void "stop timer"() {
        when:
        HttpRequest request = HttpRequest.GET('/timer/stop')
        String rsp  = client.toBlocking().retrieve(request)

        then:
        rsp == 'OK'
    }
}
