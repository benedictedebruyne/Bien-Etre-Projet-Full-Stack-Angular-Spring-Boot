import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
loading = false;
submitted = false;
returnUrl: string;
error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService){ }

    ngOnInit() {
      this.form = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', Validators.required]
 });

       // reset login status
       this.authenticationService.logout();

       // get return url from route parameters or default to '/'
       this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
 }

 onSignup(c: any) {
  this.loading = true;
   this.authenticationService.signup(c.username, c.firstname, c.lastname, c.email, c.password)
      //  .pipe(first())
       .subscribe(
           data => {
             console.log ('SIGNUP REUSSI, Vérifier que le token a été généré');
             this.router.navigate([this.returnUrl]);
           },
           error => {
               this.error = error;
               this.loading = false;
           });
 }

}

