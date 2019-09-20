import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chant-prenatal-historique',
  templateUrl: './chant-prenatal-historique.component.html',
  styleUrls: ['./chant-prenatal-historique.component.scss']
})
export class ChantPrenatalHistoriqueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hautPage() {
    window.scrollTo(0, 0);
  }

}
