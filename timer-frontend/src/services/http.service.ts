import axios, { AxiosPromise, AxiosResponse, AxiosRequestConfig } from 'axios';


// Set Api
const api = "";

export class HttpService {

    private defaultConf: AxiosRequestConfig = {
        // headers: { "X-Requested-With": "XMLHttpRequest" },
        // withCredentials: true,
    };

    public withApi(url: string) {
        return `${api}${url}`;
    }

    public get(restUrl: string): AxiosPromise<any> {
        return axios.get(this.withApi(restUrl), this.defaultConf);
    }

    public list(restUrl: string): AxiosPromise<any[]> {
        return axios.get<any[]>(this.withApi(restUrl), this.defaultConf);
    }

    public post(restUrl: string, data: any): AxiosPromise<any> {
        return axios.post(this.withApi(restUrl), data, this.defaultConf);
    }

    public put(restUrl: string, data: any): AxiosPromise<any> {
        return axios.put(this.withApi(restUrl), data, this.defaultConf);
    }

    public delete(restUrl: string): AxiosPromise<any> {
        return axios.delete(this.withApi(restUrl));
    }
}

// Export a singleton instance
export const httpService = new HttpService();
