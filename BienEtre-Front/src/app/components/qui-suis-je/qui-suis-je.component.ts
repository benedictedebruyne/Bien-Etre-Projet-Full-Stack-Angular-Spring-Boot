import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qui-suis-je',
  templateUrl: './qui-suis-je.component.html',
  styleUrls: ['./qui-suis-je.component.scss']
})
export class QuiSuisJeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hautPage() {
    window.scrollTo(0, 0);
  }

}
