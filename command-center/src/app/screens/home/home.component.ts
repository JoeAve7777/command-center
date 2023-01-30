import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { DashboardCardItem } from '@app/screens/home/dashboard/dashboard-card-item.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    dashboardCardItems: Array<DashboardCardItem> = [
        {id: '1', label: 'One', iconClass: 'fa-th', expandedRoute: 'home/data-grid'},
        {id: '2', label: 'Two', iconClass: 'fa-bar-chart', expandedRoute: ''},
        {id: '3', label: 'Three', iconClass: 'fa-line-chart', expandedRoute: ''},
        {id: '4', label: 'Four', iconClass: 'fa-id-card-o', expandedRoute: ''},
        {id: '5', label: 'Five', iconClass: 'fa-cogs', expandedRoute: ''},
        {id: '6', label: 'Six', iconClass: 'fa-users', expandedRoute: ''},
        {id: '7', label: 'Seven', iconClass: 'fa-server', expandedRoute: ''},
        {id: '8', label: 'Eight', iconClass: 'fa-sitemap', expandedRoute: ''},
        {id: '9', label: 'Nine', iconClass: 'fa-signal', expandedRoute: ''},
        {id: '10', label: 'Ten', iconClass: 'fa-tachometer', expandedRoute: ''}
    ];

    constructor() { }

    ngOnInit(): void {
        
    }

    dashboardListItemSelected(dashboardCardItem: DashboardCardItem){
        alert(dashboardCardItem.label);
    }

}
