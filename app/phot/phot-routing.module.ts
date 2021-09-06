import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotPage } from './phot.page';

const routes: Routes = [
  {
    path: '',
    component: PhotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotPageRoutingModule {}
