import { _ } from '@c8y/ngx-components';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { MeasurementService } from '@c8y/client';


/**
 * The hello.component shows a short introduction text and
 * a little list of things that you can discover within this
 * tutorial application.
 */
@Component({
  selector: 'essam',
  templateUrl: './essam.component.html'
})

export class EssamComponent implements OnInit {

  introductionText: string;
  featureList: string[];
  LineChart: [];
  PieChart: [];
  BarChart: [];
  chartLabels: string[];
  chartValues: string[];

  constructor(private mService: MeasurementService) {
  }

  async loadMeasurements() {
    console.log('loadMeasurements -- start');

    const { data, res } = await this.mService.listSeries({
      dateFrom: '2019-12-30T00:50:55.077Z',
      dateTo: '2019-12-31T23:50:55.077Z',
      source: '15667',
      //series: 'c8y_Luxometer.lux'
      series: 'c8y_Compass.compassX'
    });


    console.log(data);

    this.chartLabels = Object.keys(data.values);
    console.log('chartLabels_',this.chartLabels);

    this.chartValues = this.chartLabels.map(function (d) { return data.values[d]['0'].min })
    console.log('chartValues_',this.chartValues);

    this.makeLineChart(this.chartValues,this.chartValues)

    return true;

  }



  ngOnInit() {

    console.log('ngOnInit -- start');

    this.introductionText = _('Hi, this is essam');
    this.featureList = [
      _('IoT'),
      _('DevOps'),
      _('Data & Analytics'),
      _(', and This is an excrcise for c8y platform')
    ];

    this.loadMeasurements();
  
    console.log('ngOnInit -- end');

  }

 

  private makeLineChart(l,v){

    //console.log('Labels:',l);
    //console.log('Values:',v);

    const chartOptions = {
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
    };

    const firstDataSet = {
      label: 'first variable',
      data: v,
      fill: false,
      lineTension: 0.2,
      borderColor: "blue",
      borderWidth: 1,
      type: 'line'
    };
    const secondDataSet = {
      label: 'Second varaible',
      data: v,
      fill: false,
      lineTension: 0.2,
      borderColor: "grey",
      borderWidth: 1,
      type:'bar'
    };
    const dataSetsArr = [firstDataSet,secondDataSet];

    this.LineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels:l,
        datasets: dataSetsArr
      },
      options: chartOptions
    });

  }
  
}
