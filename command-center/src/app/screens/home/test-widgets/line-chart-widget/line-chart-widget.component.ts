import { Component, Input, OnInit } from '@angular/core';
import { DashboardCardItem } from '../../dashboard/dashboard-card-item.model';

@Component({
    selector: 'app-line-chart-widget',
    templateUrl: './line-chart-widget.component.html',
    styleUrls: ['./line-chart-widget.component.scss']
})
export class LineChartWidgetComponent implements OnInit {
    @Input() dashboardCardItem: DashboardCardItem;
    
    constructor() { }

    ngOnInit(): void {
    }

}
