import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavBarWelcomeComponent } from './nav-bar-welcome/nav-bar-welcome.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RadicarComponent } from './radicar/radicar.component';
import { TakePrictureComponent } from './take-pricture/take-pricture.component';
import { RadicarPosteriorComponent } from './radicar-posterior/radicar-posterior.component';
import { ClientDataComponent } from './client-data/client-data.component';
import { TakePicture2Component } from './take-picture2/take-picture2.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    WelcomeComponent, HomeComponent, RadicarComponent, TakePrictureComponent, RadicarPosteriorComponent, TakePicture2Component,
    ClientDataComponent
  ],
  declarations: [
    WelcomeComponent, NavBarWelcomeComponent, HomeComponent, NavBarComponent, SideNavComponent, RadicarComponent, TakePrictureComponent, 
    RadicarPosteriorComponent, ClientDataComponent, TakePicture2Component
  ]
})
export class CreditCardModule { }
