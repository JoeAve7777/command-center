import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardCardItem } from '@app/screens/home/dashboard/dashboard-card-item.model';
import { Subscription } from 'rxjs';
import { DashboardCardItemService } from '../dashboard-card-item.service';

@Component({
    selector: 'app-dashboard-card-list',
    templateUrl: './dashboard-card-list.component.html',
    styleUrls: ['./dashboard-card-list.component.scss']
})
export class DashboardCardListComponent implements OnDestroy, OnInit {
    dashboardCardItems: Array<DashboardCardItem> = [];

    private dashboardCardItemSelectedSubscription: Subscription = null;
    private dashboardCardItemRemovedSubscription: Subscription = null;

    constructor(private dashboardCardItemService: DashboardCardItemService) {

    }

    ngOnDestroy(): void {        
        this.unsubscribeFromEvents();
    }

    ngOnInit(): void {        
        this.subscribeToEvents();
    }

    hasItem(dashboardCardItem: DashboardCardItem): boolean {
        const item = this.dashboardCardItems.find(x => x.id === dashboardCardItem.id);
        return item !== null && item !== undefined;
    }

    subscribeToEvents() {
        this.dashboardCardItemSelectedSubscription = this
            .dashboardCardItemService
            .subscribeToDashboardCardItemSelectedEvent(this, (self: DashboardCardListComponent, dashboardCardItem: DashboardCardItem) => {

                if (!!dashboardCardItem && !self.hasItem(dashboardCardItem)) {
                    self.dashboardCardItems.push(dashboardCardItem);
                   // alert('SELECTED: ' + dashboardCardItem.label);
                }

            });

        this.dashboardCardItemRemovedSubscription = this
            .dashboardCardItemService
            .subscribeToDashboardCardItemRemovedEvent(this, (self: DashboardCardListComponent, dashboardCardItem: DashboardCardItem) => {

                if (!!dashboardCardItem && self.hasItem(dashboardCardItem)) {
                    self.dashboardCardItems = self.dashboardCardItems.filter(x => x.id != dashboardCardItem.id);
                }

            });
    }

    unsubscribeFromEvents() {
        
        if (!!this.dashboardCardItemSelectedSubscription) {
            this.dashboardCardItemSelectedSubscription.unsubscribe();
            this.dashboardCardItemSelectedSubscription = null;
        }

        if (!!this.dashboardCardItemRemovedSubscription) {
            this.dashboardCardItemRemovedSubscription.unsubscribe();
            this.dashboardCardItemRemovedSubscription = null;
        }

    }


}
