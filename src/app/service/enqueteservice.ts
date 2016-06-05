import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Rue} from './rue';
import {Afaire} from './afaire';
    
@Injectable()
export class EnqueteService {
    
    constructor(private http: Http) {}

    getAllRue() {
        return this.http.get('/assets/data/rue.json')
                    .toPromise()
                    .then(res => <Rue[]> res.json().data)
                    .then(data => { return data; });
    }
    
    getTodo() {
        return this.http.get('/assets/data/afaire.json')
                    .toPromise()
                    .then(res => <Afaire[]> res.json().data)
                    .then(data => { return data; });
    }
}