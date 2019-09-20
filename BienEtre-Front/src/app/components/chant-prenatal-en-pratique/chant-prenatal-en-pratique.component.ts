import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chant-prenatal-en-pratique',
  templateUrl: './chant-prenatal-en-pratique.component.html',
  styleUrls: ['./chant-prenatal-en-pratique.component.scss']
})
export class ChantPrenatalEnPratiqueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  hautPage() {
    window.scrollTo(0, 0);
  }

}
