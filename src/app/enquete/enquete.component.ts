import {Component} from '@angular/core';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';
import {InputText,Dropdown,Button} from 'primeng/primeng';

@Component({
  selector: 'enquete',
  template: require('./enquete.template.html'),
  directives: [InputText,Dropdown,Button]
})

export class Enquete {
    
    enqueteLibreForm:ControlGroup;
    
    constructor(fb: FormBuilder) {
    this.enqueteLibreForm = fb.group({
      nom: [""],
      prenom: [""]
    });
  }
    
    onSubmit(value: string) {
         console.log(this.enqueteLibreForm.value);
        console.log(this.enqueteLibreForm.controls.nom.value);
    }
    
   // get diagnostic() { return JSON.stringify(this.userform.value); }
    
}