import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestLivestockComponent } from 'src/app/components/test-livestock/test-livestock.component';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'search',
        loadChildren: () => import('../../pages/search/search.module').then((m) => m.SearchPageModule),
      },
      {
        path: 'settings',
        loadChildren: () => import('../../pages/settings/settings.module').then((m) => m.SettingsPageModule),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
