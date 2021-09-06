import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagelistPage } from './pagelist.page';

const routes: Routes = [
  {
    path: '',
    component: PagelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagelistPageRoutingModule {}
