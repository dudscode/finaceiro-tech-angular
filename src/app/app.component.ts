import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  
  title = 'financeiro-tech-angular';
  dadosGrafico = [];
  ngOnInit() {
    this.dadosGrafico = JSON.parse(localStorage.getItem('grafic-invest'));
  }
}
