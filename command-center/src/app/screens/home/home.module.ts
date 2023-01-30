import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TableModule } from 'primeng/table';
import {CardModule} from 'primeng/card';
import { PbdsProgressSpinnerModule } from 'pb-design-system/progress-spinner';

import { DashboardThumbnailListComponent } from './dashboard/dashboard-thumbnail-list/dashboard-thumbnail-list.component';
import { DashboardCardListComponent } from './dashboard/dashboard-card-list/dashboard-card-list.component';
import { DashboardThumbnailComponent } from './dashboard/dashboard-thumbnail/dashboard-thumbnail.component';
import { DashboardCardComponent } from './dashboard/dashboard-card/dashboard-card.component';
import { DataGridWidgetComponent } from './test-widgets/data-grid-widget/data-grid-widget.component';
import { BarChartWidgetComponent } from './test-widgets/bar-chart-widget/bar-chart-widget.component';
import { LineChartWidgetComponent } from './test-widgets/line-chart-widget/line-chart-widget.component';
import { DataGridPageComponent } from './test-screens/data-grid-page/data-grid-page.component';

@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule,
        CardModule,
        TableModule,
        PbdsProgressSpinnerModule
    ],
    declarations: [
        HomeComponent,
        DashboardThumbnailListComponent,
        DashboardCardListComponent,
        DashboardThumbnailComponent,
        DashboardCardComponent,
        DataGridWidgetComponent,
        BarChartWidgetComponent,
        LineChartWidgetComponent,
        DataGridPageComponent
    ],
    exports: [],
})
export class HomeModule { }
