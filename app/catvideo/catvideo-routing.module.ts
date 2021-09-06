import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatvideoPage } from './catvideo.page';

const routes: Routes = [
  {
    path: '',
    component: CatvideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatvideoPageRoutingModule {}
