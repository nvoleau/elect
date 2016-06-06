import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {last} from 'rxjs/operator/last';
import 'rxjs/Rx';

@Injectable()
export class FirebaseService {
    constructor(private http:Http) { }
        //https://www.youtube.com/watch?v=b64E6zPG1cg
        setObject(object:any){ 
            const body = JSON.stringify({object});
            return this.http.put('https://pv-election.firebaseio.com/enquete.json',body)
            .map(response=>response.json())
        }
        
    }
