import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PnewPageRoutingModule } from './pnew-routing.module';

import { PnewPage } from './pnew.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PnewPageRoutingModule
  ],
  declarations: [PnewPage]
})
export class PnewPageModule {}
