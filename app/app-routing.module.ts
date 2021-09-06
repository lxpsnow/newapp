import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'picture',
    loadChildren: () => import('./picture/picture.module').then( m => m.PicturePageModule)
  },
  {
    path: 'pagelist',
    loadChildren: () => import('./pagelist/pagelist.module').then( m => m.PagelistPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./task/task.module').then( m => m.TaskPageModule)
  },
  {
    path: 'my',
    loadChildren: () => import('./my/my.module').then( m => m.MyPageModule)
  },
  {
    path: 'pubvideo',
    loadChildren: () => import('./pubvideo/pubvideo.module').then( m => m.PubvideoPageModule)
  },
  {
    path: 'pubpic',
    loadChildren: () => import('./pubpic/pubpic.module').then( m => m.PubpicPageModule)
  },
  {
    path: 'catpic',
    loadChildren: () => import('./catpic/catpic.module').then( m => m.CatpicPageModule)
  },
  {
    path: 'catvideo',
    loadChildren: () => import('./catvideo/catvideo.module').then( m => m.CatvideoPageModule)
  },
  {
    path: 'circleinfo',
    loadChildren: () => import('./circleinfo/circleinfo.module').then( m => m.CircleinfoPageModule)
  },
  {
    path: 'pcat',
    loadChildren: () => import('./pcat/pcat.module').then( m => m.PcatPageModule)
  },
  {
    path: 'pzt',
    loadChildren: () => import('./pzt/pzt.module').then( m => m.PztPageModule)
  },
  {
    path: 'pnew',
    loadChildren: () => import('./pnew/pnew.module').then( m => m.PnewPageModule)
  },
  {
    path: 'phot',
    loadChildren: () => import('./phot/phot.module').then( m => m.PhotPageModule)
  },
  {
    path: 'gold',
    loadChildren: () => import('./gold/gold.module').then( m => m.GoldPageModule)
  },
  {
    path: 'vip',
    loadChildren: () => import('./vip/vip.module').then( m => m.VipPageModule)
  },
  {
    path: 'money',
    loadChildren: () => import('./money/money.module').then( m => m.MoneyPageModule)
  },
  {
    path: 'like',
    loadChildren: () => import('./like/like.module').then( m => m.LikePageModule)
  },
  {
    path: 'letter',
    loadChildren: () => import('./letter/letter.module').then( m => m.LetterPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
