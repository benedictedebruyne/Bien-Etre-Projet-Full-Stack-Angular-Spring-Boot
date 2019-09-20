import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subnavbarkinesio',
  templateUrl: './subnavbarkinesio.component.html',
  styleUrls: ['./subnavbarkinesio.component.scss']
})
export class SubnavbarkinesioComponent implements OnInit {

  message: boolean;
  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
