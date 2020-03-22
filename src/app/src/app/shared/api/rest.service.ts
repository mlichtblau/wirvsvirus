import {environment} from '../../../environments/environment';
import {Inject} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

interface Query {
    limit?: number;
    order?: string;
    sort?: string;
    embed?: string;
    expand?: string;
}

export class RestService<T> {
    baseUrl: string = "http://localhost:3000";
    resource = '/';

    get base(): string {
        return this.baseUrl;
    }

    get url(): string {
        return this.base + this.resource;
    }

    constructor(@Inject(HttpClient) protected http: HttpClient) {
    }

    protected static headersFor(contentType: string) {
        return new HttpHeaders({
            'Accept': `${contentType}; charset=utf-8`
        });
    }

    protected static toQueryString(paramsObject) {
        return Object
            .keys(paramsObject)
            .map(key => `_${encodeURIComponent(key)}=${encodeURIComponent(paramsObject[key])}`)
            .join('&');
    }

    protected static headers(): HttpHeaders {
        return RestService.headersFor('application/json');
    }

    query<S = T>(query?: Query): Observable<S> {
        let url = this.url;
        if (query) {
            url += `?${RestService.toQueryString(query)}`;
        }
        return this.http.get<S>(url, {headers: RestService.headers()});
    }

    all<S = T>(): Observable<S[]> {
        return this.http.get<S[]>(this.url + '/', {headers: RestService.headers()});
    }

    get<S = T>(id: any) {
        return this.http.get<T>(this.url + '/' + id, {headers: RestService.headers()});
    }

    create<S = T>(body: any) {
        return this.http.post<T>(this.url, body, {headers: RestService.headers()});
    }

    update<S = T>(id: any, body: any) {
        return this.http.put<T>(this.url + '/' + id, body, {headers: RestService.headers()});
    }

    delete<S = T>(id: any) {
        return this.http.delete<T>(this.url + '/' + id, {headers: RestService.headers()});
    }
}
