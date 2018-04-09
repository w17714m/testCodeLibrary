// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { UtilModule } from './public/util/util.module';
import { CreditCardModule } from './private/credit-card/credit-card.module';

// Componets
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { WelcomeComponent } from './private/credit-card/welcome/welcome.component';
import { FooterComponent } from './public/footer/footer.component';
import { HomeComponent } from './private/credit-card/home/home.component';
import { RadicarComponent } from './private/credit-card/radicar/radicar.component';
import { TakePrictureComponent } from './private/credit-card/take-pricture/take-pricture.component';
import { RadicarPosteriorComponent } from './private/credit-card/radicar-posterior/radicar-posterior.component';
import { SplashComponent } from './public/splash/splash.component';
import { TakePicture2Component } from './private/credit-card/take-picture2/take-picture2.component';
import { ClientDataComponent } from './private/credit-card/client-data/client-data.component';
import {DataService} from './data.service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'credit-card/radicar', component: RadicarComponent },
  { path: 'credit-card/take-picture', component: TakePrictureComponent },
  { path: 'credit-card/take-picture2', component: TakePicture2Component},
  { path: 'credit-card/radicar-posterior', component: RadicarPosteriorComponent },
  { path: 'credit-card/client-data', component: ClientDataComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    SplashComponent,
  ],
  imports: [
    BrowserModule, UtilModule, CreditCardModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
