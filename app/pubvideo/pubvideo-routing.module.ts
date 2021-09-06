import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PubvideoPage } from './pubvideo.page';

const routes: Routes = [
  {
    path: '',
    component: PubvideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PubvideoPageRoutingModule {}
