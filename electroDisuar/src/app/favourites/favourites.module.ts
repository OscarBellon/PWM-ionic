import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouritesPageRoutingModule } from './favourites-routing.module';

import { FavouritesPage } from './favourites.page';
import { CatalogoPageModule} from '../catalogo/catalogo.module'
import {SqliteService} from '../services/sqlite.service'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouritesPageRoutingModule,
    CatalogoPageModule
  ],
  declarations: [FavouritesPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FavouritesPageModule {}
