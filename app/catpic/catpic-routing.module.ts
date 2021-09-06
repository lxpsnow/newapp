import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatpicPage } from './catpic.page';

const routes: Routes = [
  {
    path: '',
    component: CatpicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatpicPageRoutingModule {}
