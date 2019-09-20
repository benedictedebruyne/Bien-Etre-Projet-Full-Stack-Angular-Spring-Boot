import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chant-prenatal-deroulement',
  templateUrl: './chant-prenatal-deroulement.component.html',
  styleUrls: ['./chant-prenatal-deroulement.component.scss']
})
export class ChantPrenatalDeroulementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  hautPage() {
    window.scrollTo(0, 0);
  }

}
