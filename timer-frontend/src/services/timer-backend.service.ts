import store from '@/store';
import { httpService } from '@/services/http.service';

export class TimerBackendService {

    private static updateTimerStatusText(text: string): void {
        store.commit('updateTimerStatusText', text);
    }

    private baseUrl: string;
    private backendHostname: string;
    private backendPort: number;
    private backendSecure: boolean;

    constructor(hostname: string, port: number, protocol: string) {
        this.backendSecure = protocol.toLocaleLowerCase().startsWith('https');
        if (location.port !== ('' + port)) {
            this.backendSecure = false;
        }
        if (port === 0) {
            console.log('port is 0, so find correct port. backendSecure: ' + this.backendSecure);
            if (this.backendSecure) {
                port = 443;
            } else {
                port = 80;
            }
        }
        const baseProtocol = this.backendSecure ? 'https://' : 'http://';
        this.baseUrl = `${baseProtocol}${hostname}:${port}/timer/`;
        this.backendHostname = hostname;
        this.backendPort = port;
        console.log('Constructing TimerBackendService with: ' + this.baseUrl);
    }

    public initializeWebSocket(): void {
        const websocketProtocol = this.backendSecure ? 'wss://' : 'ws://';
        const websocketUrl = websocketProtocol + this.backendHostname + ':' + this.backendPort + '/ws/timer';
        console.log('Initializing websocket to: ' + websocketUrl);
        const webSocket = new WebSocket(websocketUrl);
        webSocket.onmessage = (data) => TimerBackendService.updateTimerStatusText(data.data);
        webSocket.onclose = () => {
            TimerBackendService.updateTimerStatusText('Lost conn...');
            setTimeout(() => {
                this.initializeWebSocket();
            }, 5000);
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
    (location.port === '8080' ? 9090 : Number(location.port)), location.protocol);
