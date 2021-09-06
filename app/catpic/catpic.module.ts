import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatpicPageRoutingModule } from './catpic-routing.module';

import { CatpicPage } from './catpic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatpicPageRoutingModule
  ],
  declarations: [CatpicPage]
})
export class CatpicPageModule {}
