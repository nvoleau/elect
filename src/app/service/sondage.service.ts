
import {Injectable} from '@angular/core';

@Injectable()
export class SondageService {
    public db: any;
    constructor() {
        this.db = firebase.database().ref('/');
        console.log(this.db);
    }
}





