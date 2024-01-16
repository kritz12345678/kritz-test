import {LegendOptions, PlotOptions } from "highcharts";
import { SeriesOptionsType} from "./ChartOptions";

export class ChartBuilder {
  private chartOptions: Highcharts.Options = {};

  constructor() {}

  setChartType(type: string): ChartBuilder {
    this.chartOptions.chart = { type: type };
    return this;
  }

  setTitle(title: string): ChartBuilder {
    this.chartOptions.title = { text: title };
    return this;
  }

  setXAxisCategories(categories: string[]): ChartBuilder {
    this.chartOptions.xAxis = { categories: categories };
    return this;
  }

  setYAxisTitle(title: string): ChartBuilder {
    this.chartOptions.yAxis = { title: { text: title } };
    return this;
  }

  // setSeries(series: Highcharts.SeriesOptionsType[]): ChartBuilder {
  //   this.chartOptions.series = series;
  //   return this;
  // }

  setSeries(series: SeriesOptionsType[]): ChartBuilder {
    const transformedSeries: Highcharts.SeriesOptionsType[] = series.map(item => ({
      type: 'column',
      name: item.name,
      data: item.data
    }));

    this.chartOptions.series = transformedSeries;
    return this;
  }

  // Method to set plotOptions directly
/*  setPlotOptions(plotOptions: PlotOptions | undefined): ChartBuilder {
    this.chartOptions.plotOptions = plotOptions;
    return this;
  }*/
  setPlotOptions(plotOptions: PlotOptions | undefined, isPercentageChart: boolean = false): ChartBuilder {
    if (isPercentageChart && plotOptions && plotOptions.column) {
      plotOptions.column.stacking = 'percent';
    }
    this.chartOptions.plotOptions = plotOptions;
    return this;
  }

  setLegendOptions(legendOptions: LegendOptions | undefined): ChartBuilder {
    this.chartOptions.legend = legendOptions;
    return this;
  }
  // New method to set chart events
  setChartEvents(events: Highcharts.ChartEventsOptions): ChartBuilder {
    this.chartOptions.chart = { ...this.chartOptions.chart, events };
    return this;
  }
  build(): Highcharts.Options {
    return this.chartOptions;
  }
}
