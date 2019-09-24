import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/domain/appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/domain/user';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {

  user: User;

  options: any;
  eventsModel: any;
  calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin]; // important!

  myEvents: Appointment[];

  messageReceived: string;
  resultOnSubmit = false;

  constructor(private service: AppointmentsService,
    private _service: AuthenticationService,
    private userService: UsersService
  ) { }

  ngOnInit() {

    this.userService.getUserDetails(this._service.getJwtClaim('sub')).subscribe(
      resp => this.user = resp,
      error => console.log('Dans getUserDetails: Attention, error: ' + error)
    );


    this.service.getAllAppointmentsByUser(this._service.getJwtClaim('sub')).subscribe(
      resp => this.myEvents = resp,
      error => console.log('Dans getAllAppointmentByUser: Attention, error: ' + error)
    );

    // Don't use FullcalendarOption interface
    this.options = {
      editable: true,
      customButtons: {
        myCustomButton: {
          text: 'custom!',
          click() {
            alert('clicked the custom button!');
          }
        }
      },
      theme: 'standard', // default view, may be bootstrap
      header: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, resourceTimeGridPlugin]
    };

  }
}