import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kinesiologie-en-pratique',
  templateUrl: './kinesiologie-en-pratique.component.html',
  styleUrls: ['./kinesiologie-en-pratique.component.scss']
})
export class KinesiologieEnPratiqueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hautPage() {
    window.scrollTo(0, 0);
  }

}
