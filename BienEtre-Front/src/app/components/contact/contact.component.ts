import { MessagesService } from '../../services/messages.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageUtil } from 'src/app/utilities/MessageUtil';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

form: FormGroup;
loading = false;
submitted = false;
returnUrl: string;
error = '';

messageReceived: string;
resultOnSubmit = false;

  constructor(
    private formBuilder: FormBuilder,
    private messagesService: MessagesService
    ){ }

    ngOnInit() {
      this.form = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        object: ['', Validators.required],
        message: ['', Validators.required]
 });

 }

 onSubmit(c: any) {

  let msg = this.messagesService.createMessage(c.username, c.email, c.object, c.message);

  console.log('onSubmit ======================= CONVERSION DE L \'APPOINTMENT =============');
  console.log(MessageUtil.toBackend(msg));
  console.log('onSubmit ======================= Après le toBackend =============');


  this.messagesService.addMessage(msg).subscribe(
    (succes) => {
      console.log(succes);
      this.messageReceived = "Votre message est bien envoyé";
    },
    (err) => {
      console.log(err);
      this.messageReceived = err.error.result;
      console.log(' >>>>>>>>>>>>>>> Message de l ECHEC ' + this.messageReceived);

    }
  );
  this.resultOnSubmit = true;
  this.form.reset('');
}
hautPage() {
  window.scrollTo(0, 0);
}

}

