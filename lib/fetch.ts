import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import catchify from './catchify';

class Fetch {
    private instance: AxiosInstance = axios.create();
    public get(url: string, config: AxiosRequestConfig) {
        return catchify(this.instance(url, { method: 'GET', ...config }));
    }
    public post<D = unknown>(url: string, data: D, config: AxiosRequestConfig<D>) {
        return catchify(this.instance(url, { method: 'POST', data, ...config }))
    }
}

export default new Fetch();
