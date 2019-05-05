import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TagService {
    api = 'https://personalapi.plytas.com';

    constructor(private http: HttpClient) {
    }

    listTags() {
        const url = `${this.api}/tag/list`;
        const data = {};
        return this.http.post(url, data);
    }
}
