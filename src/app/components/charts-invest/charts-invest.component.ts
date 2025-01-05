import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ApexLegend, ChartComponent } from "ng-apexcharts";
import { NgApexchartsModule } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  fill: ApexFill;
  stroke: any;
  dataLabels: ApexDataLabels,
  colors: any;
};
@Component({
  selector: 'app-charts-invest',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule],
  templateUrl: './charts-invest.component.html',
  styleUrl: './charts-invest.component.scss'
})
export class ChartsInvestComponent implements OnInit {
  @Input() seriesOption: any;
  public showChart: boolean = true;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    console.log(this.seriesOption);
    this.chartOptions = {
      series: [],
      chart: {
        type: "donut",
        width: "100%",
        height: 300,
      },
      colors: ['rgba(37, 103, 249, 1)', 'rgba(143, 60, 255, 1)', 'rgba(255, 60, 130, 1)', 'rgba(241, 130, 61, 1)'],
      labels: ["Fundos de investimento", "Tesouro Direto", "Previdência Privada", "Bolsa de Valores"],
      responsive: [

      ],
      legend: {
        show: true,
        position: "bottom",
        horizontalAlign: "center",
        markers: {
          strokeWidth: 0,
          shape: "circle",
        },
        labels: {
          colors: '#ffffff',
          useSeriesColors: false
        },
      },
      fill: {
        
      },
      stroke: {
        show: false,
        curve: 'smooth',
        lineCap: 'round',
        colors: undefined,
        width: 2,
        dashArray: 0,
      },
      dataLabels:{
        style:{
          fontSize: '9px',
        }
      }
    };
  };
  ngOnInit(): void {
    console.log(this.seriesOption);
    this.chartOptions.series = this.seriesOption;
    this.showChart = this.chartOptions.series.length > 0;
  }
}
