import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {SectorData} from "./strategydata";


@Injectable({
  providedIn: 'root'
})
export class StratService {

  private apiUrl = 'YOUR_BACKEND_API_URL_HERE';

  constructor(private http: HttpClient) {
  }

  getAUMData(): Observable<SectorData> {
/*
    return this.http.get<SectorData>(`${this.apiUrl}/chart-data`);
*/

    const hardcodedData: SectorData = {
      fiscalYears: [
        {
          year: 'Year 1',
          sectors: [
            { name: 'Department A', aumValue: 1000000 },
            { name: 'Department B', aumValue: 1500000 },
            // Add other departments as needed
          ]
        },
        {
          year: 'Year 2',
          sectors: [
            { name: 'Department A', aumValue: 1100000 },
            { name: 'Department B', aumValue: 1550000 },
            // Add other departments as needed
          ]
        },
        // Add other fiscal years as needed
      ]
    };

    // Return the hardcoded data as an Observable
    return of(hardcodedData);
  }
}
 /* getChartData(): Observable<ChartData> {
      // Hardcoded data for categories and series
      const data: ChartData = {
      categories: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
      series: [
        {
          name: 'Series 1',
          data: [5, 7, 3, 8, 9]
        },
        {
          name: 'Series 2',
          data: [3, 6, 2, 7, 8]
        }
      ],
      tooltip: {
        enabled: true,
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>',
        formatter: function() {
          return this.pointFormat;
        }
      } as TooltipOptions,
      legend: {
        align: 'center',
        verticalAlign: 'bottom',
        layout: 'horizontal'
      } as LegendOptions,
      xAxis: {
        categories: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
        title: {
          text: 'Categories'
        },
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      } as AxisOptions,
      yAxis: {
        title: {
          text: 'Values'
        },
        gridLineWidth: 0
      } as AxisOptions,
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true
          }
        }
      }
    };

    return of(data);  // Return the hardcoded data as an Observable
  }

*/
