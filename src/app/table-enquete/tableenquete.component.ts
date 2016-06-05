import {Component} from '@angular/core';
import {EnqueteService} from '../service/enqueteservice';
import {Rue} from '../service/rue';
import {Afaire} from '../service/afaire';
import {HTTP_PROVIDERS} from '@angular/http';
import {InputText,DataTable,Button,Dialog,Column,Header,Footer} from 'primeng/primeng';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';


@Component({
  selector: 'tableenquete',
  template: require('./tableenquete.template.html'),
 directives: [InputText,DataTable,Button,Dialog,Column,Header,Footer],
providers: [HTTP_PROVIDERS,EnqueteService]
})

export class TableEnquete {

    rues: Rue[];
    todos:Afaire[];

    constructor(private enqueteService: EnqueteService) { }

    ngOnInit() {
       // this.enqueteService.getAllRue().then(rues => this.rues = rues);
       this.enqueteService.getTodo().then(todos=>this.todos=todos);
    }
}