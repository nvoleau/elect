import {Component} from '@angular/core';
import {Panel,Button} from 'primeng/primeng';

import {CanActivate} from '@angular/router-deprecated';
import {tokenNotExpired} from 'angular2-jwt';
import {Auth} from '../auth/auth.service';

@Component({
  selector: 'home',
  template: require('./home.template.html'),
  directives: [Button]
})
export class Home {
  
  constructor(private auth:Auth) {}

}
