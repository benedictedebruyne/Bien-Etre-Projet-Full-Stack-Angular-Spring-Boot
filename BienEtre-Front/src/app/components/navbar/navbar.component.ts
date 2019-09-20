import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ChantprenatalService } from './../../services/chantprenatal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;

  constructor(private data: ChantprenatalService,
    private _service: AuthenticationService,
    private _router: Router) { }

ngOnInit() {
  }

  isLoggedIn() {
      return this._service.isLoggedIn();
    }

    logout() {
      this._service.logout();
      this._router.navigateByUrl('/login');
    }
    getJwtClaim(claim: string): string {
      return this._service.getJwtClaim(claim);
   }

}
