import { NewsletterUtil } from './../../utilities/NewsletterUtil';
import { NewslettersService } from './../../services/newsletters.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  form: FormGroup;
  // loading = false;
  // submitted = false;
  // returnUrl: string;
  // error = '';

  messageReceived: string;
  resultOnSubmit = false;

  constructor(private service: AppointmentsService,
    private formBuilder: FormBuilder,
    private newslettersService: NewslettersService
  ) { }

  ngOnInit() {
    this.service.getAllTherapeutAppointments().subscribe(
      resp => this.data = resp,
      error => console.log('Attention, error: ' + error)
    );
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

    onSubmit(c: any) {

      let news = this.newslettersService.createNewsletter(c.username, c.email);
      this.resultOnSubmit = true;

      console.log('onSubmit ======================= CONVERSION DE L \'APPOINTMENT =============');
      console.log(NewsletterUtil.toBackend(news));
      console.log('onSubmit ======================= Après le toBackend =============');


      this.newslettersService.addNewsletter(news).subscribe(
        (succes) => {
          console.log(succes);
          this.messageReceived = "Vous êtes bien inscrit à la newsletter";

        },
        (err) => {
          console.log(err);
          this.messageReceived = err.error.result;
          console.log(' >>>>>>>>>>>>>>> Message de l ECHEC ' + this.messageReceived);

        }
      );
    }
   }
