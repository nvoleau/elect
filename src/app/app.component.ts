/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {Home} from './home';
import {Chart} from './Chart';
import {Profile} from './profile';
import {Auth} from './auth';
import {Map} from './map';
import {TableEnquete} from './table-enquete';
import {Enquete} from './enquete';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [ Auth ],
  encapsulation: ViewEncapsulation.None,
  
  template: require('./app.template.html')
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Enquete, useAsDefault: true },
  { path: '/home',  name: 'Home',  component: Home },
 { path: '/map',  name: 'Map',  component: Map },
  { path: '/tableenquete',  name: 'Sonder',  component: TableEnquete },
  { path: '/chart',  name: 'Chart',  component: Chart },
  { path: '/profile',  name: 'Profile',  component: Profile },
  { path: '/enquete',  name: 'Enquete',  component: Enquete },
])
export class App {

  constructor(private auth: Auth) {}

}