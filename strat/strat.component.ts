import {Component, Input, OnInit} from '@angular/core';
import {StackedcolchartComponent} from "../stackedcolchart/stackedcolchart.component";
import {SectorData} from "./strategydata";
import {StratService} from "./strat.service";
import {catchError, switchMap, throwError} from "rxjs";
import {SectorChartTransformServiceService} from "./sector-chart-transform-service.service";
import {ChartOptions,PlotOptions} from "../base-chart/ChartOptions";
import {TransformLogic} from "./TransformLogic";


@Component({
  selector: 'app-strat',
  standalone: true,
  imports: [
    StackedcolchartComponent
  ],
  templateUrl: './strat.component.html',
  styleUrl: './strat.component.css'
})
export class StratComponent implements OnInit{
  constructor(private StratService: StratService,private chartTransformService: SectorChartTransformServiceService) {
  }

/*
  aumData: SectorData | undefined; // Define a variable to store fetched data
*/
/*  normalChartData?: ChartOptions;
  percentageChartData?: ChartOptions ;*/
  aumData?: ChartOptions ; // Define a variable to store fetched data
  @Input() chartID!: string;
  @Input() chartType!: string;

  ngOnInit(): void {
    this.loadAumData();

  }

  loadAumData(): void {
    this.StratService.getAUMData()
    .pipe(
        catchError(error => {
          console.error('Error fetching AUM data:', error);
          return throwError(error);
        })
    )
      .subscribe(
        data => {
          const transformedData = this.chartTransformService.transformToChartOptions(data,this.chartType);
          if (transformedData !== null) {
            this.aumData = transformedData;
                  } else {
            // Handle the null case, if needed
            console.error('Failed to transform data into ChartOptions');
          }
        }

    );
/*
  if (this.chartType=='normal'){
  const normalChartData = this.chartTransformService.transformToChartOptions(data,'normal');
  if(normalChartData!=null){
  this.normalChartData=normalChartData;
};
}
else {
  const perce = this.chartTransformService.transformToChartOptions(data,'percentage');
  if(perce!=null){
    this.percentageChartData=perce;
  };
*/

        /* .subscribe((transformedData) => {
      // Handle any additional actions after data is loaded and transformed
      this.aumData = transformedData;
    });*/
       /* .subscribe(
          data => {
            const transformedData = this.chartTransformService.transformToChartOptions(data);
            if (transformedData !== null) {
              this.aumData = transformedData;
            } else {
              // Handle the null case, if needed
              console.error('Failed to transform data into ChartOptions');
            }
/!*
            this.aumData = data;
*!/
            // Handle the fetched data as needed (e.g., render charts, display in UI, etc.)
          }
        );*/
    }
// Helper function to set stacking to 'percent' in PlotOptions
/*  private setPlotOptions(plotOptions: PlotOptions | undefined): PlotOptions | undefined {
    if (plotOptions && plotOptions.column) {
      return {
        ...plotOptions,
        column: {
          ...plotOptions.column,
          stacking: 'percent'
        }
      };
    }
    return plotOptions;
  }*/


}

