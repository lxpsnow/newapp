import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PubpicPageRoutingModule } from './pubpic-routing.module';

import { PubpicPage } from './pubpic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PubpicPageRoutingModule
  ],
  declarations: [PubpicPage]
})
export class PubpicPageModule {}
