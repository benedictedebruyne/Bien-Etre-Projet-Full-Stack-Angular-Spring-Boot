import { ChantprenatalService } from './../../services/chantprenatal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subnavbar',
  templateUrl: './subnavbar.component.html',
  styleUrls: ['./subnavbar.component.scss']
})
export class SubnavbarComponent implements OnInit {
  message: boolean;

  isCollapsed = true;
  constructor(private data: ChantprenatalService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = this.message);
  }


}
