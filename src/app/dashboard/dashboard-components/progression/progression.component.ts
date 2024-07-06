import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexTooltip,
  ApexTheme,
  ApexGrid,
  ApexPlotOptions,
  ApexStroke

  // ChartComponent,
  // ApexAxisChartSeries,
  // ApexChart,
  // ApexXAxis,
  // ApexDataLabels,
  // ApexTooltip,
  // ApexStroke
} from 'ng-apexcharts';

export type salesChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  stroke: ApexStroke | any;
  theme: ApexTheme | any;
  tooltip: ApexTooltip | any;
  dataLabels: ApexDataLabels | any;
  legend: ApexLegend | any;
  colors: string[] | any;
  markers: any;
  grid: ApexGrid | any;
  plotOptions: ApexPlotOptions | any;
};

@Component({
  selector: 'app-progression',
  templateUrl: './progression.component.html'
})
export class ProgressionComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public salesChartOptions: Partial<salesChartOptions>;
  constructor() {
    this.salesChartOptions = {
      series: [
        {
          name: "Federico Garcia",
          data: [2, 3, 8]
        },
        {
          name: "Martin Perez",
          data: [1, 8, 4]
        },
        {
          name: "Viviana sotelo",
          data: [1, 10, 2]
        },
        {
          name: "Enzo Garcia",
          data: [2, 3, 5]
        }
      ],
      chart: {
        fontFamily: 'Montserrat,sans-serif',
        height: 400,
        type: 'bar',
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#1E8F8E", "#13454D", "#64D6D5", "#3CF0EF"],
      stroke: {
        show: true,
        width: 1,
        colors: ["transparent"],
      },
      grid: {
        strokeDashArray: 3,
      },
      xaxis: {
        categories: [
          "Principiante",
          "Moderado",
          "Dificil",
        ],
      },
      tooltip: {
        theme: 'dark'
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
    };
  }

  ngOnInit(): void {
  }

}
