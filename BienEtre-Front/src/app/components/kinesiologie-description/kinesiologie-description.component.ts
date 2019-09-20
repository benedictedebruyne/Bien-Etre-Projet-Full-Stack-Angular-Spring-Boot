import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kinesiologie-description',
  templateUrl: './kinesiologie-description.component.html',
  styleUrls: ['./kinesiologie-description.component.scss']
})
export class KinesiologieDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  hautPage() {
    window.scrollTo(0, 0);
  }

}
