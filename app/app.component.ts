import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {StratComponent} from "./strat/strat.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, StratComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alchm';
  chartid: string='container'
  chart2:string='container1'
  Normalstackedcolchart: string='normal';
  Percentstackedcolchart: string='percentage';
}
