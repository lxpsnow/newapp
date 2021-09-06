import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PztPageRoutingModule } from './pzt-routing.module';

import { PztPage } from './pzt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PztPageRoutingModule
  ],
  declarations: [PztPage]
})
export class PztPageModule {}
