import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagelistPageRoutingModule } from './pagelist-routing.module';

import { PagelistPage } from './pagelist.page';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagelistPageRoutingModule,
    NgxIonicImageViewerModule
  ],
  declarations: [PagelistPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PagelistPageModule {}
