import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatvideoPageRoutingModule } from './catvideo-routing.module';

import { CatvideoPage } from './catvideo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatvideoPageRoutingModule
  ],
  declarations: [CatvideoPage]
})
export class CatvideoPageModule {}
