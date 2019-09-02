import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class CommonServicesService {


    constructor(private HttpClient: HttpClient) { }

    readonly url = 'http://localhost:8000/commonservices';

    get(method: string, codigoTransacao: string, collection: string) {
        return this.HttpClient.get(`${this.url}?method=${method}&codigoTransacao=${codigoTransacao}&collection=${collection}`);
    }

}


