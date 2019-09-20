import { ChantprenatalService } from './../../services/chantprenatal.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chant-prenatal-description',
  templateUrl: './chant-prenatal-description.component.html',
  styleUrls: ['./chant-prenatal-description.component.scss']
})
export class ChantPrenatalDescriptionComponent{

  constructor() { }

  hautPage() {
    window.scrollTo(0, 0);
  }


}

