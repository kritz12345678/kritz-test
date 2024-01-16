import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';

import {BaseChartComponent} from "../base-chart/base-chart.component";
import {FiscalYear, SectorData} from "../strat/strategydata";
import {ChartBuilder} from "../base-chart/ChartBuilder";
import {ChartOptions } from "../base-chart/ChartOptions";
import {PlotOptions,LegendOptions} from "highcharts";

@Component({
  selector: 'app-stackedcolchart',
  standalone: true,
  imports: [
    BaseChartComponent
  ],
  templateUrl: './stackedcolchart.component.html',
  styleUrl: './stackedcolchart.component.css'
})
export class StackedcolchartComponent implements OnInit {

  @Input() chartId: string = ''; // Default value

/*
  @Input() data: SectorData | undefined; // Input data from parent component
*/
  @Input() data: ChartOptions | undefined; // Input data from parent component

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {}; // Initialize with default options

  ngOnInit(): void {
    if (this.data) {
      this.chartOptions = this.generateChartOptions(this.data);
    } else {
      console.error('SectorData is undefined'); // Log an error message if data is undefined
    }
  }

/*
  generateChartOptions(data: SectorData): Highcharts.Options {
*/
  generateChartOptions(data: ChartOptions): Highcharts.Options {

    return new ChartBuilder()
      .setChartType('column')
      .setTitle('Assets Under Management by Department Over Fiscal Years')
      .setXAxisCategories(data.categories)
/*
      .setYAxisTitle(data.YAxisTitle)
*/
      .setSeries(data.series)
      .setPlotOptions(data.plotOptions as PlotOptions)
      .setLegendOptions(data.legend as LegendOptions)
      .build();
  }
  /*  const categories: string[] = data.fiscalYears.map((year: FiscalYear) => year.year);

    const series: Highcharts.SeriesColumnOptions[] = data.fiscalYears[0].sectors.map(department => {
      const departmentData: number[] = []; // Create an empty array to store AUM values for the department
      data.fiscalYears.forEach(year => {
        const deptForYear = year.sectors.find(d => d.name === department.name);
        if (deptForYear) {
          departmentData.push(deptForYear.aumValue); // Assuming aumValue is the AUM value for the department
        } else {
          departmentData.push(0); // If no data is available for the department in a specific year, push 0
        }
      });

      return {
        type: 'column', // Specify the type as 'column'
        name: department.name,
        data: departmentData
      };
    });

    // Use ChartBuilder to build Highcharts options
    return new ChartBuilder()
      .setChartType('column')
      .setTitle('Assets Under Management by Department Over Fiscal Years')
      .setXAxisCategories(categories)
      .setYAxisTitle('Assets Under Management')
      .setSeries(series)
      .build();
*/
   /* return {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Assets Under Management by Department Over Fiscal Years'
      },
      xAxis: {
        categories: categories,
        title: {
          text: 'Fiscal Years'
        }
      },
      yAxis: {
        title: {
          text: 'Assets Under Management'
        }
      },
      series: series
    };*/
/*
  }
*/

}
