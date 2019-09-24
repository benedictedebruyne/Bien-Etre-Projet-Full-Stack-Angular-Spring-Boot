import { AuthenticationService } from 'src/app/services/authentication.service';
import { AppointmentUtil } from './../utilities/AppointmentUtil';
import { HttpClient } from '@angular/common/http';
import { Appointment } from './../domain/appointment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(private client: HttpClient, private authService: AuthenticationService) { }

  URL = 'http://localhost:8080/appointments';

  public getAllAppointments(): Observable<Appointment[]> {
    return this.client.get<Appointment[]>(this.URL)
      .pipe(
        tap(val => console.log(`getAllAppointments - BEFORE MAP: ${val}`)),
        map(
          (jsonArray: Object[]) => jsonArray.map(jsonItem => AppointmentUtil.fromBackend(jsonItem))
        ),
        tap(val => console.log(`AFTER MAP: ${val}`))
      );
  }

  public getAllTherapeutAppointments(): Observable<Appointment[]> {
    return this.client.get<Appointment[]>(this.URL+'/therapeut')
      .pipe(
        tap(val => console.log(`BEFORE MAP: ${val}`)),
        map(
          (jsonArray: Object[]) => jsonArray.map(jsonItem => AppointmentUtil.fromBackend(jsonItem))
        ),
        tap(val => console.log(`AFTER MAP: ${val}`))
      );
  }

  public getAllAppointmentsByUser(username: string): Observable<Appointment[]> {
    return this.client.get<Appointment[]>(this.URL+ '/' + username)
      .pipe(
        tap(val => console.log(`BEFORE MAP: ${val}`)),
        map(
          (jsonArray: Object[]) => jsonArray.map(jsonItem => AppointmentUtil.fromBackendForUser(jsonItem))
        ),
        tap(val => console.log(`AFTER MAP: ${val}`))
      );
  }

   createAppointment(type: string, date: string, comment: string): Appointment {

    var appointment: any = {};

    // Getting the userName from the token (The user is supposed to be authenticated ...)
    appointment.username = this.authService.getJwtClaim('sub');

    var myDatePipe = new DatePipe('en-US');
    var myStartDate =  myDatePipe.transform(date, 'yyyy-MM-dd');
    var myStartHour =  myDatePipe.transform(date, 'HH:mm:ss');
    console.log(myStartHour);
    appointment.start = myStartDate + 'T' + myStartHour + ':00';
    appointment.allDay = false;
    appointment.comment = comment;

    if (type=='Chant prénatal (collectif)') {
      appointment.type = "CR";
    }
    else if (type=='Chant prénatal (individuel)') {
      appointment.type = "IR";
    }
    if (type=='Massage') {
      appointment.type = "MR";
    }
    else if (type=='Kinésiologie') {
      appointment.type = "KR";
    }
      return appointment;
  }

  addAppointment(appointment: Appointment): Observable<any> {
    console.table(AppointmentUtil.toBackend(appointment));
    return this.client.post(this.URL + '/' + appointment.username, AppointmentUtil.toBackend(appointment));
//     return this.client.get<Appointment[]>(this.URL).pipe(
//                                                        map(response => {
//                                                                console.table('response.content : ' + response);
//                                                                return response;
//                                                        })
//     );
// }

  }

  public getAllAppointmentsOld(): Appointment[] {
    return [
      {
        title: 'STATIQUE - Kinésiologie', start: '2019-08-26T09:00:00', end: '2019-08-26T12:00:00', backgroundColor: '#007FFF'
        , textColor: '#FFFFFF', type: 'K'
      },
      { title: 'Madame A', start: '2019-08-26T09:00:00', end: '2019-08-26T10:00:00', backgroundColor: '#A9EAFE', type: 'KR' },
      { title: 'Madame B', start: '2019-08-26T11:00:00', end: '2019-08-26T12:00:00', backgroundColor: '#A9EAFE', type: 'KR' },
      {
        title: 'Massage', start: '2019-08-26T14:00:00', end: '2019-08-26T18:00:00', backgroundColor: '#F0C300'
        , textColor: '#FFFFFF', type: 'M'
      },
      { title: 'Madame B', start: '2019-08-26T14:00:00', end: '2019-08-26T15:30:00', backgroundColor: '#FDF1B8', type: 'MR' },
      {
        title: 'Chant prénatal', start: '2019-08-26T18:00:00', end: '2019-08-26T19:30:00', backgroundColor: '#C60800'
        , textColor: '#FFFFFF', type: 'C'
      },
      { title: 'Madame & Monsieur C', start: '2019-08-26T18:00:00', end: '2019-08-26T19:30:00', backgroundColor: '#FE96A0', type: 'CR' },
      { title: 'Madame D', start: '2019-08-26T18:00:00', end: '2019-08-26T19:30:00', backgroundColor: '#FE96A0', type: 'CR' },
      {
        title: 'Kinésiologie', start: '2019-08-27T14:00:00', end: '2019-08-27T18:00:00', backgroundColor: '#007FFF'
        , textColor: '#FFFFFF', type: 'K'
      },
      {
        title: 'Kinésiologie', start: '2019-08-28T09:00:00', end: '2019-08-28T12:00:00', backgroundColor: '#007FFF'
        , textColor: '#FFFFFF', type: 'K'
      },
      { title: 'Madame E', start: '2019-08-28T09:00:00', end: '2019-08-26T10:00:00', backgroundColor: '#A9EAFE', type: 'KR' },
      {
        title: 'Massage', start: '2019-08-29T14:00:00', end: '2019-08-29T18:00:00', backgroundColor: '#F0C300'
        , textColor: '#FFFFFF', type: 'M'
      },
      {
        title: 'Chant prénatal', start: '2019-08-30T14:00:00', end: '2019-08-30T15:30:00', backgroundColor: '#C60800'
        , textColor: '#FFFFFF', type: 'C'
      },
      {
        title: 'Séminaire', start: '2019-08-31T09:00:00', backgroundColor: '#663366'
        , textColor: '#FFFFFF', allDay: true, type: 'S'
      },
    ];
  }

}
