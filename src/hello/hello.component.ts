import { _ } from '@c8y/ngx-components';
import { Component ,OnInit} from '@angular/core';
import { Chart } from 'chart.js';

/**
 * The hello.component shows a short introduction text and
 * a little list of things that you can discover within this
 * tutorial application.
 */
@Component({
  selector: 'hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent implements OnInit {
  introductionText: string;
  featureList: string[];
  LineChart: any;
  constructor() {
    // _ annotation to mark this string as translatable string.
    this.introductionText = _('... this basic Application will show you some concepts and components about the:');
    this.featureList = [
      _('Navigator (panel on the left)'),
      _('Tabs (within World-page)'),
      _('Breadcrumbs (below the c8y-title)'),
      _('Global actions (top right corner (+)-Button)'),
      _('Local actions (within Superhero-page)'),
      _('Fetching data (within Device-page)')
    ];
  }

  ngOnInit() {
    console.log('ngOnInit -- start');

    this.introductionText = _('Hi, this is essam');
    this.featureList = [
      _('IoT'),
      _('DevOps'),
      _('Data & Analytics'),
      _('Global actions (top right corner (+)-Button)')
    ];


    this.LineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: 'Number of Items Sold in Months',
          data: [9, 7, 3, 5, 2, 10, 15, 16, 19, 3, 1, 9],
          fill: false,
          lineTension: 0.2,
          borderColor: "red",
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Line Chart",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    console.log('ngOnInit -- end');

  }
}
