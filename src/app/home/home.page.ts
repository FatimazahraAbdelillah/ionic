import {Component, ViewChild} from '@angular/core';
import {NavController} from "@ionic/angular";
import { Chart } from 'chart.js';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  @ViewChild('barChart') barChart;
  bars: any;
  colorArray: any;
  constructor(public nav: NavController) {
  }

  logout() {
    this.nav.navigateRoot('/login');
  }
  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Débit', 'Crédit'],
        datasets: [{
          data: [2.5, 3.8],
          backgroundColor: [
            'rgb(12,169,255)',
            'rgb(50,95,255)'
          ]
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
