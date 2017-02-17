import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { MaterialModule, MdButton } from '@angular/material';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';

import 'hammerjs';

// services
import { BitcoreService } from './services/bitcore.service';
import { DataService } from './services/data.service';

// Ngrx
import { StoreModule } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { compose } from '@ngrx/core/compose';

// reducers
import { toolbarReducer } from './reducers/toolbarReducer';

// components
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignMessageComponent } from './sign-message/sign-message.component';
import { CheckSignatureComponent } from './check-signature/check-signature.component';
import { EciesComponent } from './ecies/ecies.component';
import { EciesEncryptComponent } from './ecies/ecies-encrypt/ecies-encrypt.component';
import { EciesDecryptComponent } from './ecies/ecies-decrypt/ecies-decrypt.component';
import { SendFromPrivkeyComponent } from './send-from-privkey/send-from-privkey.component';


const rootReducer = compose(storeLogger(), combineReducers)({
  toolbar: toolbarReducer
});

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
    path: 'send-from-privkey',
    component: SendFromPrivkeyComponent
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
    EciesDecryptComponent,
    SendFromPrivkeyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    SlimLoadingBarModule.forRoot(),
    RouterModule.forRoot(routeConfig),
    StoreModule.provideStore(rootReducer)
  ],
  providers: [
    BitcoreService,
    DataService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
