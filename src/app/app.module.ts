import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule, MdButton } from '@angular/material';

import { AppComponent } from './app.component';

import 'hammerjs';

import { BitcoreService } from './services/bitcore.service';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignMessageComponent } from './sign-message/sign-message.component';
import { CheckSignatureComponent } from './check-signature/check-signature.component';
import { EciesComponent } from './ecies/ecies.component';
import { EciesEncryptComponent } from './ecies/ecies-encrypt/ecies-encrypt.component';
import { EciesDecryptComponent } from './ecies/ecies-decrypt/ecies-decrypt.component';

const routeConfig:Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sign-message',
    component: SignMessageComponent
  },
  {
    path: 'check-signature',
    component: CheckSignatureComponent
  },
  {
    path: 'ecies',
    component: EciesComponent,
    children: [
      { path: '', redirectTo: 'encrypt', pathMatch: 'full' },
      { path: 'encrypt', component: EciesEncryptComponent },
      { path: 'decrypt', component: EciesDecryptComponent }
    ]
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
    SignMessageComponent,
    CheckSignatureComponent,
    EciesComponent,
    EciesEncryptComponent,
    EciesDecryptComponent
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
