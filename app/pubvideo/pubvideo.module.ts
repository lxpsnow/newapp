import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PubvideoPageRoutingModule } from './pubvideo-routing.module';

import { PubvideoPage } from './pubvideo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PubvideoPageRoutingModule
  ],
  declarations: [PubvideoPage]
})
export class PubvideoPageModule {}
