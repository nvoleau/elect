import {Component} from '@angular/core';
import { NgForm ,FormBuilder, ControlGroup, Validators } from '@angular/common';
import {InputText,Dropdown,Button,InputSwitch,SelectButton,Rating,InputTextarea} from 'primeng/primeng';
import {TabView} from 'primeng/primeng';
import {TabPanel} from 'primeng/primeng';
import {FirebaseService} from '../service/firebase.service';
import {SondageService} from '../service/sondage.service';
import {Sondage} from '../enquete/sondage.class';

import {Router,RouteParams,CanActivate} from '@angular/router-deprecated';
import {tokenNotExpired} from 'angular2-jwt';
import {Auth} from '../auth/auth.service';

import {Http, Response} from '@angular/http';

@Component({
  selector: 'enquete',
  styles: [`
label {
    color: black;
}
  `],
  template: require('./enquete.template.html'),
  
  directives: [InputText,Dropdown,Button,InputSwitch,SelectButton,TabView,TabPanel,Rating,InputTextarea],
  providers:[FirebaseService, SondageService]
})


@CanActivate(() => tokenNotExpired())

export class Enquete {
    
    enqueteLibreForm:ControlGroup;
    sexe = [{label:'Masculin',value:'Masculin'}, {label:'Feminin',value:'Feminin'}];
    ouinon = [{label:'Oui',value:'oui'}, {label:'Non',value:'non'}];
    open = [{label:'ouvre',value:'ouvre'}, {label:'ouvre pas',value:'ouvre pas'}, {label:'pas interressé',value:'pas interressé'}];
    priorite = [{'label':'Emploi', 'value':'Emploi'},{label:'Economie',value:'Economie'}, {label:'Education',value:'Education'}
    , {label:'Service public',value:'Service public'}
    , {label:'Sécurité',value:'Sécurité'}
    , {label:'Immigration',value:'Immigration'}
    , {label:'Environnement',value:'Environnement'}];

    
   
    sondage : Object={};
    result:Object[];
    
    onSubmit() {
         //console.log( this.sondage);
        //console.log(this.enqueteLibreForm.controls.nom.value);
       // this.firebaseService.setObject(this.sondage).subscribe();
       let t : any;
    t = this._sondageService.db.child('/enquete').push(this.sondage);
          console.log( 'apres submit');
          console.log(t);
           console.log( '**** apres submit ****');
       this.router.navigate(['Chart']);

    }
    
    constructor(private auth:Auth,private router: Router, 
    private _sondageService:SondageService, routeParams: RouteParams){
         this.sondage.owner = this.auth.user.nickname;
         this.sondage.nom = routeParams.get('nom');
         this.sondage.rue = routeParams.get('adresse');
        console.log( routeParams.get('nom'));
    }
    
    
    onGetAll(){
       

//this._sondageService.db.child('enquete').on('value', data => {
  //          this.sondageTmp = data.val();
    //    });
         console.log('*********************----5');
             console.log(this.sondageTmp);
              console.log('*********************----6');

//pour connaitre le nombre fait par voleau


console.log("mes sondages "+this._sondageService.getNbBy("enquete","owner","voleau"));

console.log("ouvre "+this._sondageService.getNbBy("enquete","open","ouvre"));


//console.log('nb result '+nb);

    }

sondageTmp:any;

ngOnInit() {

  this._sondageService.db.child('enquete').on('value', data => {
            this.sondageTmp = data.val();
        });
   
}



   // get diagnostic() { return JSON.stringify(this.userform.value); }
    
}