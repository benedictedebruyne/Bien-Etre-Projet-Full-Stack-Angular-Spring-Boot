import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { Appointment } from './../../domain/appointment';
import { AppointmentsService } from './../../services/appointments.service';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppointmentUtil } from 'src/app/utilities/AppointmentUtil';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.scss']
})
export class RendezvousComponent implements OnInit {

  form: FormGroup;
  error = '';
  value: any;
  minDateValue = new Date();

  options: any;
  eventsModel: any;
  calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin]; // important!

  myEvents: Appointment[];

  messageReceived: string;
  resultOnSubmit = false;

  constructor(
    private formBuilder: FormBuilder,
    private appointmentsService: AppointmentsService,
    private service: AppointmentsService,
    private _service: AuthenticationService) { }

  @ViewChild('fullcalendar', { static: true }) fullcalendar: FullCalendarComponent;
  @ViewChild('external', { static: true }) external: ElementRef;
  ngOnInit() {
    this.form = this.formBuilder.group({
      comment: [''],
      type: ['', Validators.required],
      date: ['', Validators.required]
    });

    this.service.getAllAppointments().subscribe(
      res => this.myEvents = res,
      err => console.log('getAllAppointments - ATTENTION, Il y a eu l\'erreur : ' + err)
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
  eventClick(model) {
    console.log(model);
  }
  eventDragStop(model) {
    console.log(model);
  }
  dateClick(model) {
    console.log(model);
  }
  updateHeader() {
    this.options.header = {
      left: 'prev,next myCustomButton',
      center: 'title',
      right: ''
    };
  }
  updateEvents() {
    this.eventsModel = [{
      title: 'Updaten Event',
      start: this.yearMonth + '-08',
      end: this.yearMonth + '-10'
    }];
  }
  get yearMonth(): string {
    const dateObj = new Date();
    return dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
  }
  dayRender(ev) {
    ev.el.addEventListener('dblclick', () => {
      alert('double click!');
    });
  }

  getJwtClaim(claim: string): string {
    return this._service.getJwtClaim(claim);
 }

  onSubmit(c: any) {

    let appointment = this.appointmentsService.createAppointment(c.type, c.date, c.comment);
    this.resultOnSubmit = true;

    console.log('onSubmit ======================= CONVERSION DE L \'APPOINTMENT =============');
    console.log(AppointmentUtil.toBackend(appointment));
    console.log('onSubmit ======================= Après le toBackend =============');


    this.appointmentsService.addAppointment(appointment).subscribe(
      (succes) => {
        console.log(succes);
        this.service.getAllAppointments().subscribe(res =>
          this.myEvents = res);
        this.messageReceived = "Votre rendez-vous est confirmé";
        // window.alert(this.messageReceived);

      },
      (err) => {
        console.log(err);
        this.messageReceived = err.error.result;
        console.log(' >>>>>>>>>>>>>>> Message de l ECHEC ' + this.messageReceived);

      }
    );
  }


}

