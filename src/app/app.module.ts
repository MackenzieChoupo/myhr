import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ContactComponent } from './contact/contact.component';
import { MissionComponent } from './presentation/mission/mission.component';
import { EquipeComponent } from './presentation/equipe/equipe.component';
import { HeaderComponent } from './home/header/header.component';
import { SlideComponent } from './home/slide/slide.component';
import { NewslettersComponent } from './home/newsletters/newsletters.component';
import { FooterComponent } from './home/footer/footer.component';
import { BodyComponent } from './home/body/body.component';
import { ChatComponent } from './home/chat/chat.component';
import { HeadertitleComponent } from './presentation/equipe/headertitle/headertitle.component';
import { BodyteamComponent } from './presentation/equipe/bodyteam/bodyteam.component';
import { BodymissionComponent } from './presentation/mission/bodymission/bodymission.component';
import { HeadermissionComponent } from './presentation/mission/headermission/headermission.component';
import { HeaderserviceComponent } from './presentation/service/headerservice/headerservice.component';
import { BodyserviceComponent } from './presentation/service/bodyservice/bodyservice.component';
import { HeaderinscripComponent } from './inscription/headerinscrip/headerinscrip.component';
import { BodyinscripComponent } from './inscription/bodyinscrip/bodyinscrip.component';
import { BodyconnexComponent } from './connexion/bodyconnex/bodyconnex.component';
import { HeaderconnexComponent } from './connexion/headerconnex/headerconnex.component';
import { HeaderdocComponent } from './document/headerdoc/headerdoc.component';
import { BodydocComponent } from './document/bodydoc/bodydoc.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ServiceComponent } from './presentation/service/service.component';
import { InscriptpartComponent } from './inscriptpart/inscriptpart.component';
import { HearderpartComponent } from './inscriptpart/hearderpart/hearderpart.component';
import { BodypartComponent } from './inscriptpart/bodypart/bodypart.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { HentComponent } from './entreprise/hent/hent.component';
import { BentComponent } from './entreprise/bent/bent.component';
import { profilService } from '../service/profilService';
import { UtilisateurService } from '../service/utilisateurService';
import { ParticulierService } from '../service/ParticulierService';
import { RoleService } from '../service/roleService';
import { EntrepriseService } from '../service/EntrepriseService';
import { RechercheComponent } from './recherche/recherche.component';
import { DocumentComponent } from './document/document.component';

import { ArticleComponent } from './article/article.component';


import { CguComponent } from './cgu/cgu.component';
import { CgvComponent } from './cgv/cgv.component';
import { HeadcgvComponent } from './cgv/headcgv/headcgv.component';
import { BodycgvComponent } from './cgv/bodycgv/bodycgv.component';
import { BodycguComponent } from './cgu/bodycgu/bodycgu.component';
import { HeadcguComponent } from './cgu/headcgu/headcgu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HeadreservComponent } from './reservation/headreserv/headreserv.component';
import { BodyreservComponent } from './reservation/bodyreserv/bodyreserv.component';
import { ArticldetailsComponent } from './articldetails/articldetails.component';
import { LiensutilComponent } from './liensutil/liensutil.component';
import { ArtheadComponent } from './article/arthead/arthead.component';
import { ArtbodyComponent } from './article/artbody/artbody.component';

import { Pricing1Component } from './home/pricing1/pricing1.component';
import { Services1Component } from './home/services1/services1.component';
import { NewsComponent } from './home/news/news.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { ParternComponent } from './home/partern/partern.component';
import { Slide3Component } from './home/slide3/slide3.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'presentation/mission', component: MissionComponent },
  { path: 'presentation/service', component: ServiceComponent },
  { path: 'presentation/equipe', component: EquipeComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'inscriptpart', component: InscriptpartComponent },
  { path: 'entreprise', component: EntrepriseComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'recherche', component: RechercheComponent },
  { path: 'documentation', component: DocumentComponent },
  { path: 'Cgu', component: CguComponent },
  { path: 'Cgv', component: CgvComponent },
  { path: 'Reservation', component: ReservationComponent},
  { path: 'liensutiles', component: LiensutilComponent},
{ path: 'mesarticles', component: ArticleComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PresentationComponent,
    ContactComponent,
    MissionComponent,
    EquipeComponent,
    HeaderComponent,
    SlideComponent,
    NewslettersComponent,
    FooterComponent,
    BodyComponent,
    ChatComponent,
    HeadertitleComponent,
    BodyteamComponent,
    BodymissionComponent,
    HeadermissionComponent,
    HeaderserviceComponent,
    BodyserviceComponent,
    HeaderinscripComponent,
    BodyinscripComponent,
    BodyconnexComponent,
    HeaderconnexComponent,
    HeaderdocComponent,
    BodydocComponent,
    InscriptionComponent,
    ConnexionComponent,
    ServiceComponent,
    InscriptpartComponent,
    HearderpartComponent,
    BodypartComponent,
    EntrepriseComponent,
    HentComponent,
    BentComponent,
    RechercheComponent,
    DocumentComponent,
    
    ArticleComponent,
   
  
    CguComponent,
    CgvComponent,
    HeadcgvComponent,
    BodycgvComponent,
    BodycguComponent,
    HeadcguComponent,
    ReservationComponent,
    HeadreservComponent,
    BodyreservComponent,
    ArticldetailsComponent,
    LiensutilComponent,
    ArtheadComponent,
    ArtbodyComponent,
    
    Pricing1Component,
    Services1Component,
    NewsComponent,
    CarouselComponent,
    ParternComponent,
    Slide3Component,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    profilService,
    UtilisateurService,
    ParticulierService,
    RoleService,
    EntrepriseService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
