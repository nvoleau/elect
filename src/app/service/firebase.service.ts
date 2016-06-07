import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {last} from 'rxjs/operator/last';
import 'rxjs/Rx';
import {Sondage} from '../enquete/sondage.class'

@Injectable()
export class FirebaseService {
    constructor(private http:Http) { }
        //https://www.youtube.com/watch?v=b64E6zPG1cg
        setObject(sondage:Sondage){ 
            const body = JSON.stringify({sondage});
            return this.http.post('https://pv-election.firebaseio.com/enquete.json',body)
           // return this.http.put('https://pv-election.firebaseio.com/enquete.json',body)
            .map(response=>response.json())
        }
        
    }
