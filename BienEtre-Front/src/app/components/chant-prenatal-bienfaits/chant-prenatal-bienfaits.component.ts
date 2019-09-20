import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chant-prenatal-bienfaits',
  templateUrl: './chant-prenatal-bienfaits.component.html',
  styleUrls: ['./chant-prenatal-bienfaits.component.scss']
})
export class ChantPrenatalBienfaitsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hautPage() {
    window.scrollTo(0, 0);
  }


}
