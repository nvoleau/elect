import {Component} from '@angular/core';
import {DoughnutChart,PieChart,BarChart,LineChart,Button} from 'primeng/primeng';

import {Router,CanActivate} from '@angular/router-deprecated';
import {tokenNotExpired} from 'angular2-jwt';
import {Auth} from '../auth/auth.service';


@Component({
  selector: 'chart',
  template: require('./chart.template.html'),
  directives: [DoughnutChart,PieChart,LineChart,BarChart,Button]
})
export class Chart{

    data1: any[];
    data2: any;
    data:any;
    dataPosition:any;
    
    
    //msgs: Message[];

    updated: boolean;

    constructor(private router: Router) {
        this.data1 = [{
            value: 55,
            color: '#F7464A',
            highlight: '#FF5A6E',
            label: 'A sonder'
        },
        {
            value: 45,
            color: '#46BFBD',
            highlight: '#5AD3D1',
            label: 'Sonder'
        }];
        this.data2 = [{
            value: 45,
            color: '#F7464A',
            highlight: '#FF5A5E',
            label: 'Ouvert'
        },
        {
            value: 55,
            color: '#46BFBD',
            highlight: '#5AD3D1',
            label: 'Fermé'
        }];
        
        this.data = {
            labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
            datasets: [
                {
                    label: 'Sondés',
                    fillColor: 'rgba(220,220,220,0.2)',
                    strokeColor: 'rgba(220,220,220,1)',
                    pointColor: 'rgba(220,220,220,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220,220,220,1)',
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };
        
        //position
         this.dataPosition = {
            labels: ['Nicolas', 'Caroline', 'Alexandre', 'Olivier', 'Jean', 'Michele', 'Marie'],
            datasets: [
                {
                    label: 'Position',
                    backgroundColor: '#36A2EB',
                    borderColor: '#1E88E5',
                    data: [220, 250, 180, 281, 156, 155, 40]
                }
            ]
        }
        
        
    }

    onSegmentClick(event) {
        if(event.segments) {
            //this.msgs = [{severity: 'info', summary: 'Segment Selected', 'detail': event.segments[0].label}];
        }
    }

    removeYellow() {
        this.data1.pop();
        this.updated = true;
    }

    callSondage(){
         this.router.navigate(['Enquete']);
    }
}