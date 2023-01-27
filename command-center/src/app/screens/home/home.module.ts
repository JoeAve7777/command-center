import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TableModule } from 'primeng/table';
import { PbdsProgressSpinnerModule } from 'pb-design-system/progress-spinner';

@NgModule({
  imports: [SharedModule, HomeRoutingModule, TableModule, PbdsProgressSpinnerModule],
  declarations: [HomeComponent],
  exports: [],
})
export class HomeModule {}
