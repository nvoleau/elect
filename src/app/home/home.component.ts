import {Component} from '@angular/core';
import {Button} from 'primeng/primeng';

@Component({
  selector: 'home',
  template: require('./home.template.html'),
  directives: [Button]
})
export class Home {
  
  constructor() {}

}
