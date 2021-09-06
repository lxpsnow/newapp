import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PztPage } from './pzt.page';

const routes: Routes = [
  {
    path: '',
    component: PztPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PztPageRoutingModule {}
