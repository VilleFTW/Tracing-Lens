import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./containers/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  { path: '404', loadChildren: () => import('./pages/notfound/notfound.module').then((m) => m.NotfoundPageModule) },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
