import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
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
export class BaseChartComponent implements OnInit, AfterViewInit {
  @Input() chartOptions?: Highcharts.Options;
  @Input() width: number | undefined;
  @Input() height: number | undefined;
  @Input() chartID!: string;

  private chart: Highcharts.Chart | undefined;

  ngOnInit() {}

  ngAfterViewInit() {
    if(this.chartOptions !=null)
    this.chart = Highcharts.chart(this.chartID,this.chartOptions);
  }

  protected readonly Highcharts = Highcharts;
}
