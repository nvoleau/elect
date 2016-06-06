import {Component} from '@angular/core';
import { NgForm ,FormBuilder, ControlGroup, Validators } from '@angular/common';
import {InputText,Dropdown,Button,InputSwitch,SelectButton,Rating} from 'primeng/primeng';
import {TabView} from 'primeng/primeng';
import {TabPanel} from 'primeng/primeng';
import {FirebaseService} from '../service/firebase.service';



@Component({
  selector: 'enquete',
  template: require('./enquete.template.html'),
  directives: [InputText,Dropdown,Button,InputSwitch,SelectButton,TabView,TabPanel,Rating],
  providers:[FirebaseService]
})

export class Enquete {
    
    enqueteLibreForm:ControlGroup;
    sexe = [{'label':'', 'value':''},{label:'Masculin',value:'Masculin'}, {label:'Feminin',value:'Feminin'}];
    priorite = [{'label':'Emploi', 'value':'Emploi'},{label:'Economie',value:'Economie'}, {label:'Education',value:'Education'}
    , {label:'Service public',value:'Service public'}
    , {label:'Sécurité',value:'Sécurité'}
    , {label:'Immigration',value:'Immigration'}
    , {label:'Environnement',value:'Environnement'}];
    rue=[{'label':'', 'value':''},{'label':'ALLÉE ALFRED DE VIGNY', 'value':'ALLÉE ALFRED DE VIGNY'},
{'label':'ALLÉE AUGUSTE COMTE', 'value':'ALLÉE AUGUSTE COMTE'},
{'label':'ALLÉE BUFFON', 'value':'ALLÉE BUFFON'},
{'label':'ALLÉE D\'ANJOU', 'value':'ALLÉE D\'ANJOU'},
{'label':'ALLÉE D\'ARROMANCHES', 'value':'ALLÉE D\'ARROMANCHES'},
{'label':'ALLÉE DE BRÉVIANDE', 'value':'ALLÉE DE BRÉVIANDE'},
{'label':'ALLÉE DE LA BERGERIE', 'value':'ALLÉE DE LA BERGERIE'},
{'label':'ALLÉE DE LA MONTAGNE', 'value':'ALLÉE DE LA MONTAGNE'},
{'label':'ALLÉE DE MONTDAUPHIN', 'value':'ALLÉE DE MONTDAUPHIN'},
{'label':'ALLÉE DE PLEIN-CIEL', 'value':'ALLÉE DE PLEIN-CIEL'},
{'label':'ALLÉE DES ABEILLES', 'value':'ALLÉE DES ABEILLES'},
{'label':'ALLÉE DES ACACIAS', 'value':'ALLÉE DES ACACIAS'},
{'label':'ALLÉE DES OSIÈRES', 'value':'ALLÉE DES OSIÈRES'},
{'label':'ALLÉE DU BOIS-DE-L\'ETRIER', 'value':'ALLÉE DU BOIS-DE-L\'ETRIER'},
{'label':'ALLÉE DU DAUPHINÉ', 'value':'ALLÉE DU DAUPHINÉ'},
{'label':'ALLÉE DU FUSAIN', 'value':'ALLÉE DU FUSAIN'},
{'label':'ALLÉE DU SOLEIL', 'value':'ALLÉE DU SOLEIL'},
{'label':'ALLÉE FRÉDÉRIC MISTRAL', 'value':'ALLÉE FRÉDÉRIC MISTRAL'},
{'label':'ALLÉE LOUIS BLERIOT', 'value':'ALLÉE LOUIS BLERIOT'},
{'label':'AVENUE DE BIR-HAKEIM', 'value':'AVENUE DE BIR-HAKEIM'},
{'label':'AVENUE DE LA LIBÉRATION', 'value':'AVENUE DE LA LIBÉRATION'},
{'label':'AVENUE DES CHARMETTES', 'value':'AVENUE DES CHARMETTES'},
{'label':'AVENUE DES COURTILLERAIES', 'value':'AVENUE DES COURTILLERAIES'},
{'label':'AVENUE DES GLIÈRES', 'value':'AVENUE DES GLIÈRES'},
{'label':'AVENUE DU MARCHÉ-MARAIS', 'value':'AVENUE DU MARCHÉ-MARAIS'},
{'label':'AVENUE JEAN MONNET', 'value':'AVENUE JEAN MONNET'},
{'label':'AVENUE MAURICE DAUVERGNE', 'value':'AVENUE MAURICE DAUVERGNE'},
{'label':'IMPASSE DE LA MOTTE', 'value':'IMPASSE DE LA MOTTE'},
{'label':'QUAI DES TILLEULS', 'value':'QUAI DES TILLEULS'},
{'label':'RÉSIDENCE CIRCÉ', 'value':'RÉSIDENCE CIRCÉ'},
{'label':'RUE ARISTIDE BRIAND', 'value':'RUE ARISTIDE BRIAND'},
{'label':'RUE CHAPU', 'value':'RUE CHAPU'},
{'label':'RUE CREUSE', 'value':'RUE CREUSE'},
{'label':'RUE DE BARBIZON', 'value':'RUE DE BARBIZON'},
{'label':'RUE DE BEAUMONT-DU-GÂTINAIS', 'value':'RUE DE BEAUMONT-DU-GÂTINAIS'},
{'label':'RUE DE BOUVILLE', 'value':'RUE DE BOUVILLE'},
{'label':'RUE DE CHÂTEAU-LANDON', 'value':'RUE DE CHÂTEAU-LANDON'},
{'label':'RUE DE FARCHEVILLE', 'value':'RUE DE FARCHEVILLE'},
{'label':'RUE DE LA HAIE-DE-CHASSE', 'value':'RUE DE LA HAIE-DE-CHASSE'},
{'label':'RUE DE LA NOUE', 'value':'RUE DE LA NOUE'},
{'label':'RUE DE LA POMPONNETTE', 'value':'RUE DE LA POMPONNETTE'},
{'label':'RUE DE L\'EGLISE', 'value':'RUE DE L\'EGLISE'},
{'label':'RUE DE SAINT-LOUP-DE-NAUD', 'value':'RUE DE SAINT-LOUP-DE-NAUD'},
{'label':'RUE DENIS PAPIN', 'value':'RUE DENIS PAPIN'},
{'label':'RUE DES BELOTINS', 'value':'RUE DES BELOTINS'},
{'label':'RUE DU BOIS-DES-JOIES', 'value':'RUE DU BOIS-DES-JOIES'},
{'label':'RUE DU BOIS-GUYOT', 'value':'RUE DU BOIS-GUYOT'},
{'label':'RUE DU COMMANDANT L\'HERMINIER', 'value':'RUE DU COMMANDANT L\'HERMINIER'},
{'label':'RUE DU MÜRGER-PAPILLON', 'value':'RUE DU MÜRGER-PAPILLON'},
{'label':'RUE DU PRÉ-RIGOT', 'value':'RUE DU PRÉ-RIGOT'},
{'label':'RUE EUGÈNE DELACROIX', 'value':'RUE EUGÈNE DELACROIX'},
{'label':'RUE FRANÇOIS GIRARDON', 'value':'RUE FRANÇOIS GIRARDON'},
{'label':'RUE JACQUES-LOUIS DAVID', 'value':'RUE JACQUES-LOUIS DAVID'},
{'label':'RUE JEAN GOUJON', 'value':'RUE JEAN GOUJON'},
{'label':'RUE MAURICE UTRILLO', 'value':'RUE MAURICE UTRILLO'},
{'label':'RUE MONTESQUIEU', 'value':'RUE MONTESQUIEU'},
{'label':'RUE PIPE-SOURIS', 'value':'RUE PIPE-SOURIS'},
{'label':'RUE RENÉ CASSIN', 'value':'RUE RENÉ CASSIN'},
{'label':'SQUARE ALBERT SCHWEITZER', 'value':'SQUARE ALBERT SCHWEITZER'},
{'label':'SQUARE ALEXIS CARREL', 'value':'SQUARE ALEXIS CARREL'},
{'label':'SQUARE ANATOLE FRANCE', 'value':'SQUARE ANATOLE FRANCE'},
{'label':'SQUARE DES SORBIERS', 'value':'SQUARE DES SORBIERS'},
{'label':'SQUARE FRÉDÉRIC PASSY', 'value':'SQUARE FRÉDÉRIC PASSY'},
{'label':'SQUARE HENRI MOISSAN', 'value':'SQUARE HENRI MOISSAN'},
{'label':'SQUARE LAPLACE', 'value':'SQUARE LAPLACE'},
{'label':'SQUARE MARIE CURIE', 'value':'SQUARE MARIE CURIE'},
{'label':'SQUARE NORMANDIE-NIEMEN', 'value':'SQUARE NORMANDIE-NIEMEN'},
{'label':'SQUARE ROMAIN ROLLAND', 'value':'SQUARE ROMAIN ROLLAND'},
{'label':'SQUARE RONSARD', 'value':'SQUARE RONSARD'},
{'label':'SQUARE SULLY PRUDHOMME', 'value':'SQUARE SULLY PRUDHOMME'}
];
    
   
    sondage : Object={};
    
    onSubmit() {
         console.log( this.sondage);
        //console.log(this.enqueteLibreForm.controls.nom.value);
        this.firebaseService.setObject(this.sondage).subscribe();
       
    }
    
    constructor(private firebaseService:FirebaseService){
         console.log( 'constructor');
        //console.log(this.enqueteLibreForm.controls.nom.value);
       
    }
    
   // get diagnostic() { return JSON.stringify(this.userform.value); }
    
}