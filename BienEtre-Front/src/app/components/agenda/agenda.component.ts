import { AppointmentsService } from './../../services/appointments.service';
import { Appointment } from '../../domain/appointment';
import { Component, OnInit } from '@angular/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AppointmentsListComponent implements OnInit {

  calendarPlugins = [ dayGridPlugin, timeGridPlugin, interactionPlugin ]; // important!


  myEvents: Appointment[];
  constructor(private service: AppointmentsService) { }

  ngOnInit() {
    this.service.getAllAppointments().subscribe(
      res => { this.myEvents = res;
               console.table(res);
             },
      err => console.log('ATTENTION, Il y a eu l\'erreur : ' + err)
    );

    // this.myEvents = this.service.getAllAppointmentsOld();
  }

}
