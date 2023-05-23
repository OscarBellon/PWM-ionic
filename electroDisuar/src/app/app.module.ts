import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './header/header.component';
import { ProfilePage } from './profile/profile.page';
import {environment} from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore'
import { AngularFireStorageModule} from '@angular/fire/compat/storage'

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';


/*import { AngularFireModule } from '@angular/fire';*/
//import { Auth } from '@angular/fire/compat/auth';
import { UserService } from './services/user.services';
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFirestoreModule,
  AngularFireStorageModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireAuthModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, UserService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
