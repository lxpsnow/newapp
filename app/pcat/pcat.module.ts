import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PcatPageRoutingModule } from './pcat-routing.module';

import { PcatPage } from './pcat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PcatPageRoutingModule
  ],
  declarations: [PcatPage]
})
export class PcatPageModule {}
