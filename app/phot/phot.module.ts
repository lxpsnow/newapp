import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotPageRoutingModule } from './phot-routing.module';

import { PhotPage } from './phot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotPageRoutingModule
  ],
  declarations: [PhotPage]
})
export class PhotPageModule {}
