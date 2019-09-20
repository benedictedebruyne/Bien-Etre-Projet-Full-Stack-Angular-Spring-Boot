import { AppointmentsService } from './../../services/appointments.service';
import { Appointment } from './../../domain/appointment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  data: Appointment[];

  constructor(private service: AppointmentsService) { }

  ngOnInit() {
    this.service.getAllTherapeutAppointments().subscribe(
      resp => this.data = resp,
      error => console.log('Attention, error: ' + error)
    );

  }

}
