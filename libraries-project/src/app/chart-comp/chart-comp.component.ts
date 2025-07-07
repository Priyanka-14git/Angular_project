import { Component } from '@angular/core';
import {
  Chart,
  registerables
} from 'chart.js';

@Component({
  selector: 'app-chart-comp',
  templateUrl: './chart-comp.component.html',
  styleUrls: ['./chart-comp.component.css']
})
export class ChartCompComponent {
  constructor(){
     Chart.register(...registerables);
  }
ngAfterViewInit(): void {
    this.renderPieChart();
    this.renderPolarChart();
  }

  renderPieChart(): void {
    const ctx = document.getElementById('myPieChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Apples', 'Bananas', 'Oranges'],
        datasets: [{
          label: 'Fruits Eaten',
          data: [10, 20, 30],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)'
          ],
          borderColor: ['white', 'white', 'white'],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Fruits Eaten - Pie Chart'
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }

  renderPolarChart(): void {
    const ctx = document.getElementById('myPolarChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: ['Carbs', 'Proteins', 'Fats'],
        datasets: [{
          label: 'Macronutrient Breakdown',
          data: [60, 35, 45],
          backgroundColor: [
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(75, 192, 192, 0.6)'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Macronutrients - Polar Area Chart'
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }


}
