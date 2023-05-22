import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePageRoutingModule } from './detalle-routing.module';

import { DetallePage } from './detalle.page';
import { CatalogoPageModule} from '../catalogo/catalogo.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePageRoutingModule,
    CatalogoPageModule
  ],
  declarations: [DetallePage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DetallePageModule {}
