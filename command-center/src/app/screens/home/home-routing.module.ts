import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeGuard } from '@app/guards/home.guard';

import { HeaderComponent } from '@app/shared/header/header.component';
import { FooterComponent } from '@app/shared/footer/footer.component';
import { DataGridPageComponent } from './test-screens/data-grid-page/data-grid-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        outlet: 'header',
        component: HeaderComponent,
        canActivate: [HomeGuard]
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: '',
        outlet: 'footer',
        component: FooterComponent
      }
    ]
  },
  {
    path: 'data-grid',
    component: DataGridPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
