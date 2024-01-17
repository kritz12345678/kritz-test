// src/app/app.module.ts

import {ApplicationRef, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HTTP requests

import

{ AppComponent } from './app.component';
import {StratComponent} from "./strat/strat.component";
import {BaseChartComponent} from "./base-chart/base-chart.component";
import {DepartmentColorServiceService} from "./department-color-service.service";
// Import other components, services, etc., as needed

@NgModule({
  declarations: [

    // Declare other components here
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent,
    StratComponent,
    BaseChartComponent,

    // Add HttpClientModule to imports array
    // Other modules like FormsModule, ReactiveFormsModule, etc., as needed
  ],
  providers: [],

})
export class AppModule {
  constructor(private appRef: ApplicationRef) {
  }

  ngDoBootstrap() {
    const rootComponent = customElements.get('app-root');
    if (!rootComponent) {
      const rootElement = document.querySelector('app-root');
      if (rootElement) {
        this.appRef.bootstrap(AppComponent);
      }
    }
  }

}
