import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppointmentsListComponent } from './components/agenda/agenda.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ChantPrenatalDescriptionComponent } from './components/chant-prenatal-description/chant-prenatal-description.component';
import { ChantPrenatalBienfaitsComponent } from './components/chant-prenatal-bienfaits/chant-prenatal-bienfaits.component';
import { ChantPrenatalDeroulementComponent } from './components/chant-prenatal-deroulement/chant-prenatal-deroulement.component';
import { ChantPrenatalEnPratiqueComponent } from './components/chant-prenatal-en-pratique/chant-prenatal-en-pratique.component';
import { ChantPrenatalHistoriqueComponent } from './components/chant-prenatal-historique/chant-prenatal-historique.component';
import { KinesiologieDescriptionComponent } from './components/kinesiologie-description/kinesiologie-description.component';
import { KinesiologieEnPratiqueComponent } from './components/kinesiologie-en-pratique/kinesiologie-en-pratique.component';
import { QuiSuisJeComponent } from './components/qui-suis-je/qui-suis-je.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SubnavbarComponent } from './components/subnavbar/subnavbar.component';
import { SubnavbarkinesioComponent } from './components/subnavbarkinesio/subnavbarkinesio.component';
import { RendezvousComponent } from './components/rendezvous/rendezvous.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactComponent } from './components/contact/contact.component';
import { CompteComponent } from './components/compte/compte.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AppointmentsListComponent,
    AccueilComponent,
    ChantPrenatalDescriptionComponent,
    ChantPrenatalBienfaitsComponent,
    ChantPrenatalDeroulementComponent,
    ChantPrenatalEnPratiqueComponent,
    ChantPrenatalHistoriqueComponent,
    KinesiologieDescriptionComponent,
    KinesiologieEnPratiqueComponent,
    QuiSuisJeComponent,
    ContactComponent,
    NotfoundComponent,
    SubnavbarComponent,
    SubnavbarkinesioComponent,
    RendezvousComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponent,
    ContactComponent,
    CompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
   }

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
