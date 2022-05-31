import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestLivestockComponent } from 'src/app/components/test-livestock/test-livestock.component';
import { LivestockResolver } from './resolvers/livestock-resolver.resolver';
import { SearchPage } from './search.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPage,
  },
  {
    path: 'livestock/:id',
    component: TestLivestockComponent,
    resolve: { livestock: LivestockResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPageRoutingModule {}
