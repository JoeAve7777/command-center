import { Component, Input, OnInit } from '@angular/core';
import { DashboardCardItem } from '../../dashboard/dashboard-card-item.model';

@Component({
    selector: 'app-data-grid-widget',
    templateUrl: './data-grid-widget.component.html',
    styleUrls: ['./data-grid-widget.component.scss']
})
export class DataGridWidgetComponent implements OnInit {
    @Input() dashboardCardItem: DashboardCardItem;
    
    constructor() { }

    ngOnInit(): void {
    }

}
