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
  seriesCallback?:(year:string)=>void;
}

export interface SeriesOptionsType {
  color: any;
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
  gridLineWidth: number;
  lineWidth: number;
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
  x?: number;
  y?: number;
  floating?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  itemStyle?: {
    color: string;
    fontSize: string;
    fontFamily: string;
    fontStyle: string;
    fontWeight: string;
    lineHeight: string;
  };
}

export interface PlotOptions {
  column?: ColumnOptions;
}

export interface ColumnOptions {
  stacking?: string;
  dataLabels?: DataLabelsOptions;
  pointWidth?: number;
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
