import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CircleinfoPageRoutingModule } from './circleinfo-routing.module';

import { CircleinfoPage } from './circleinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CircleinfoPageRoutingModule
  ],
  declarations: [CircleinfoPage]
})
export class CircleinfoPageModule {}
