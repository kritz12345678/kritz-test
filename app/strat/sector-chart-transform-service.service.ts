import { Injectable } from '@angular/core';
import { SectorData } from './strategydata';
import {ChartOptions} from "../base-chart/ChartOptions";
import {TransformLogic} from "./TransformLogic";

@Injectable({
  providedIn: 'root'
})
export class SectorChartTransformServiceService {

  constructor() { }

  transformToChartOptions(data: SectorData, chartType: string): ChartOptions | null {
    try {
      const transformedData = new TransformLogic(data,chartType);

      return transformedData ? transformedData as ChartOptions: null;
    } catch (error) {
      console.error('Error transforming data:', error);
      return null;
    }
  }
}
