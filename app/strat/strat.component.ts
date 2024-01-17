import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {SectorData} from "./strategydata";
import {StratService} from "./strat.service";
import {catchError, switchMap, throwError} from "rxjs";
import {SectorChartTransformServiceService} from "./sector-chart-transform-service.service";
import {TransformLogic} from "./TransformLogic";
import {Highcharts} from "highcharts/modules/map";
import {BaseChartComponent} from "../base-chart/base-chart.component";


@Component({
  selector: 'app-strat',
  standalone: true,
  templateUrl: './strat.component.html',
  imports: [
    BaseChartComponent
  ],
  styleUrl: './strat.component.css'
})
export class StratComponent implements OnInit{
  @ViewChild('StackedcolchartComponent') stackedColChartRef!: ElementRef;

  constructor(private StratService: StratService,private chartTransformService: SectorChartTransformServiceService) {
  }

/*
  aumData: SectorData | undefined; // Define a variable to store fetched data
*/
/*  normalChartData?: ChartOptions;
  percentageChartData?: ChartOptions ;*/
  chartOptions?: Highcharts.Options;
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
          if (data !== null) {
            this.chartOptions = this.buildChartOptions(data);
/*
            this.setupChartClickEvent();
*/

          } else {
            // Handle the null case, if needed
            console.error('Failed to transform data into ChartOptions');
          }
        }
      );
  }
  buildChartOptions(data: SectorData): Highcharts.Options {
    const categories = data.fiscalYears.map(year => year.year);

    // Setting legend based on the number of categories
    const   series:Highcharts.SeriesOptionsType[] = data.fiscalYears[0].sectors.map((department) => {
      const departmentData: number[] = [];
      data.fiscalYears.forEach(year => {
        const deptForYear = year.sectors.find(d => d.name === department.name);
        departmentData.push(deptForYear ? deptForYear.aumValue : 0);
      });
/*
      const colorKey = department.name.toLowerCase();
*/
/*
      const color = (departmentColors as Record<string, string>)[colorKey] || 'gray';
*/
      /*
              const color = this.departmentColorService.getColor(department.name);
      */

/*
      console.log(`Department: ${department.name}, Color: ${color}`);
*/

      return {
        type: 'column',
        name: department.name,
        data: departmentData,
/*
        color: color
*/

      };
    });
    return {
      chart: {
        type: 'column',
        width: 700,
      },
      title: {
        text: '',
        align: 'left',
      },
      xAxis: {
        categories: categories,
        gridLineWidth: 0,
        lineWidth: 0,
      },
      yAxis: {
        min: 0,
        title: {
          text: '',
        },
        stackLabels: {
          enabled: true,
        },
        gridLineWidth: 0,
        lineWidth: 0,
        labels: {
          step: 2,
        },
      },
      legend: {
        align: 'left',
        x: 0,
        verticalAlign: 'top',
        y: -20,
        floating: true,
        backgroundColor: 'white',
        borderColor: '#CCC',
        borderWidth: 0,
        itemStyle: {
          color: '#333F48',
          fontSize: '15px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'normal',
        },
      },
      tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
          },
          pointWidth: 88,
        },
      },
      series: series,
    };
  }
}
