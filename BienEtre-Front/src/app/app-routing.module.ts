import { RendezvousComponent } from './components/rendezvous/rendezvous.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { QuiSuisJeComponent } from './components/qui-suis-je/qui-suis-je.component';
import { KinesiologieEnPratiqueComponent } from './components/kinesiologie-en-pratique/kinesiologie-en-pratique.component';
import { KinesiologieDescriptionComponent } from './components/kinesiologie-description/kinesiologie-description.component';
import { ChantPrenatalHistoriqueComponent } from './components/chant-prenatal-historique/chant-prenatal-historique.component';
import { ChantPrenatalEnPratiqueComponent } from './components/chant-prenatal-en-pratique/chant-prenatal-en-pratique.component';
import { ChantPrenatalDeroulementComponent } from './components/chant-prenatal-deroulement/chant-prenatal-deroulement.component';
import { ChantPrenatalBienfaitsComponent } from './components/chant-prenatal-bienfaits/chant-prenatal-bienfaits.component';
import { ChantPrenatalDescriptionComponent } from './components/chant-prenatal-description/chant-prenatal-description.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { LoginComponent } from './components/login/login.component';
import { AppointmentsListComponent } from './components/agenda/agenda.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LogoutResolver } from './resolvers/logout-resolver';
import { SignupComponent } from './components/signup/signup.component';
import { ContactComponent } from './components/contact/contact.component';
import { CompteComponent } from './components/compte/compte.component';

const routes: Routes = [
  {path: '', component: AccueilComponent, pathMatch: 'full'},
  {path: 'chantprenatal', component: ChantPrenatalDescriptionComponent},
  {path: 'chantprenatal/bienfaits', component: ChantPrenatalBienfaitsComponent},
  {path: 'chantprenatal/deroulement', component: ChantPrenatalDeroulementComponent},
  {path: 'chantprenatal/enpratique', component: ChantPrenatalEnPratiqueComponent},
  {path: 'chantprenatal/historique', component: ChantPrenatalHistoriqueComponent},
  {path: 'kinesiologie', component: KinesiologieDescriptionComponent},
  {path: 'kinesiologie/enpratique', component: KinesiologieEnPratiqueComponent},
  {path: 'quisuisje', component: QuiSuisJeComponent},
  {path: 'agenda', component: AppointmentsListComponent},
  {path: 'rendezvous', component: RendezvousComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'compte', component:CompteComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'logout', component: AccueilComponent, resolve: [LogoutResolver]},
  {path: '**', component: NotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
