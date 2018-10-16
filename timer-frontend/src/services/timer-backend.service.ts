import store from '@/store';
import { httpService } from '@/services/http.service';

export class TimerBackendService {

    private static updateTimerStatusText(text: string): void {
        store.commit('updateTimerStatusText', text);
    }

    private baseUrl: string;
    private backendHostname: string;
    private backendPort: number;

    constructor(hostname: string, port: number) {
        this.baseUrl = 'http://' + hostname + ':' + port + '/timer/';
        this.backendHostname = hostname;
        this.backendPort = port;
    }

    public initializeWebSocket(): void {
        const webSocket = new WebSocket('ws://' + this.backendHostname + ':' + this.backendPort + '/ws/timer');
        webSocket.onmessage = (data) => TimerBackendService.updateTimerStatusText(data.data);
        webSocket.onclose = () => {
            TimerBackendService.updateTimerStatusText('Lost conn...');
            setTimeout(() => {
                this.initializeWebSocket();
            }, 1000);
        };
    }

    public startTimer(): void {
        httpService.get(this.baseUrl + 'start');
    }

    public stopTimer(): void {
        httpService.get(this.baseUrl + 'stop');
    }

}

export const timerBackendService = new TimerBackendService(location.hostname,
    (location.port === '8080' ? 9090 : Number(location.port)));
