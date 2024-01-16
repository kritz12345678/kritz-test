import {Component, Input} from '@angular/core';
import * as Highcharts from 'highcharts';
import {HighchartsChartModule} from "highcharts-angular";

@Component({
  selector: 'app-base-chart',
  standalone: true,
  imports: [
    HighchartsChartModule
  ],
  templateUrl: './base-chart.component.html',
  styleUrl: './base-chart.component.css'
})
export class BaseChartComponent {
/*
  @Input() chartId: string | undefined;
*/  Highcharts: typeof Highcharts = Highcharts;

  @Input() chartOptions?: Highcharts.Options ;
  @Input() chartId!: string;

  constructor() {}

  ngOnInit(): void {
    if(this.chartOptions)
    Highcharts.chart( this.chartId,this.chartOptions);
  }

}
