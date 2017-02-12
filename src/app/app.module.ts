import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '@angular/material';
import { MdButton } from '@angular2-material/button';

import { AppComponent } from './app.component';

import 'hammerjs';

import { BitcoreService } from './services/bitcore.service';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignMessageComponent } from './sign-message/sign-message.component';

export const routeConfig:Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sign-message',
    component: SignMessageComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    SignMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routeConfig)
  ],
  providers: [
    BitcoreService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
