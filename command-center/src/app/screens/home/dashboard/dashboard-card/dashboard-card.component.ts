import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardCardItem } from '../dashboard-card-item.model';
import { DashboardCardItemService } from '../dashboard-card-item.service';

@Component({
    selector: 'app-dashboard-card',
    templateUrl: './dashboard-card.component.html',
    styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {
    @Input() dashboardCardItem: DashboardCardItem;

    get hasExpandedRoute(): boolean {
        return (!!this.dashboardCardItem.expandedRoute);
    }

    constructor(
        private router: Router,
        private dashboardCardItemService: DashboardCardItemService) {

    }

    ngOnInit(): void {

    }

    onClick() {
        this.dashboardCardItemService.broadcastDashboardCardItemRemovedEvent(this.dashboardCardItem);
    }

    onExpandClick() {

        // if (!!this.dashboardCardItem.expandedRoute) {
        //     this.router.navigate(
        //         [this.dashboardCardItem.expandedRoute],
        //         { replaceUrl: true, skipLocationChange: true }
        //     );
        // }

        this.dashboardCardItemService.broadcastDashboardCardExpandRequestedEvent(this.dashboardCardItem);

    }
}
