// chart-data.interface.ts
/*
import {LegendOptions, PlotOptions} from "highcharts";
*/

export interface ChartOptions {
  categories: string[];
  series: SeriesOptionsType[];
  tooltip?: TooltipOptions;
  legend?: LegendOptions;
  xAxis?: AxisOptions;
  yAxis?: AxisOptions;
  plotOptions?: PlotOptions;
  YAxisTitle?: string;
}

export interface SeriesOptionsType {
  name: string;
  data: number[];
}

export interface TooltipOptions {
  enabled?: boolean;
  headerFormat?: string;
  pointFormat?: string;
  formatter?: Function;
}

/*export interface LegendOptions {
  align?: string;
  verticalAlign?: string;
/!*  layout?: string;*!/
}*/

export interface AxisOptions {
  title?: AxisTitle;
  labels?: AxisLabels;
}

export interface AxisTitle {
  text?: string;
}

export interface AxisLabels {
  rotation?: number;
  style?: any;
}

export interface LegendOptions {
  align?: string;
  verticalAlign?: string;
  enabled?: boolean;
}

export interface PlotOptions {
  column?: ColumnOptions;
}

export interface ColumnOptions {
  stacking?: string;
  dataLabels?: DataLabelsOptions;
}

export interface DataLabelsOptions {
  enabled?: boolean;
}

/*
export interface PlotOptions {
  column?: ColumnOptions;
}

export interface ColumnOptions {
  stacking?: OptionsStackingValue;
  dataLabels?: DataLabelsOptions;
}

type OptionsStackingValue = 'normal' | 'percent' | null | undefined;

export interface DataLabelsOptions {
  enabled?: boolean;
}
*/
