import { SectorData } from "./strategydata";

import {
  AxisOptions,
  ChartOptions,
  LegendOptions,
  PlotOptions,
  SeriesOptionsType,
  TooltipOptions
} from "../base-chart/ChartOptions";
/*
import {LegendOptions, PlotOptions} from "highcharts";
*/

export class TransformLogic implements ChartOptions {

  constructor(data: SectorData, chartType: string) {

      const categories: string[] = data.fiscalYears.map(year => year.year);

    // Setting legend based on the number of categories
      const seriesData: SeriesOptionsType[] = data.fiscalYears[0].sectors.map(department => {
        const departmentData: number[] = [];
        data.fiscalYears.forEach(year => {
          const deptForYear = year.sectors.find(d => d.name === department.name);
          departmentData.push(deptForYear ? deptForYear.aumValue : 0);
        });

        return {
          type: 'column',
          name: department.name,
          data: departmentData
        };
      });


    this.categories = categories;
    this.series = seriesData;

    this.setLegend(chartType);
    this.setPlotOptions(chartType);


    // Setting other properties

  /*  this.legend = {
      align: 'left',
      verticalAlign: 'top'
    };

    this.plotOptions = {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true
        }
      }
    };*/

    this.tooltip = {
      enabled: true,
      headerFormat: '<span style="font-size: 10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>',
      formatter: function() {
        return this.pointFormat;
      }
    };

    this.xAxis = {
      title: {
        text: 'Fiscal Years'
      }
    };

    this.yAxis = {
     /* title: {
        text: 'AUM Value'
      }*/
    };

/*
    this.YAxisTitle=''as string
*/
  }

  categories: string[];
  plotOptions: PlotOptions | undefined;
  series: SeriesOptionsType[];
  tooltip: TooltipOptions;
  xAxis: AxisOptions;
  yAxis: AxisOptions;
  legend: LegendOptions | undefined;
/*
  YAxisTitle: string ;
*/

  // Function to determine legend position based on the number of categories
  private setLegend(chartType: string): void {
    console.log('Chart Type:', chartType);

    this.legend = chartType.toLowerCase() === 'percentage'
      ? {enabled:false}// No legend for percentage chart
      : {
        align: 'left',
        verticalAlign: 'top',
        enabled:true
        // You can customize these values based on your logic
      } as LegendOptions;


  }
// Function to toggle series visibility in the percentage chart
  private togglePercentageChartSeriesVisibility(seriesIndex: number): void {
    // Logic to toggle series visibility in the percentage chart
    // You may need to adapt this based on your application structure
  }
  private setPlotOptions(chartType: string): void {
    console.log('Chart Type:', chartType);

    this.plotOptions = chartType.toLowerCase() === 'percentage'
      ? {
        column: {
          stacking: 'percent',
          // You can customize these values based on your logic
        },
      } as PlotOptions
      :  {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          // You can customize these values based on your logic
        },
      },
    }as PlotOptions;
  }
}

// This should now align with the provided interface definitions for the chart options.
