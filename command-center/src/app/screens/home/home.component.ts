import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardCardItem } from '@app/screens/home/dashboard/dashboard-card-item.model';
import { Subscription } from 'rxjs';
import { DashboardCardItemService } from './dashboard/dashboard-card-item.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy, OnInit {
    private _expandedId = '';
    private _showExpandedVersion = false;
    private dashboardCardExpandRequestedSubscription: Subscription = null;

    get expandedId() : string {
        return this._expandedId;
    }

    get showExpandedVersion() : boolean {
        return this._showExpandedVersion;
    }


    dashboardCardItems: Array<DashboardCardItem> = [
        {id: '1', label: 'Successful Logins', iconClass: 'fa-sign-in', expandedRoute: 'home/data-grid'},
        {id: '2', label: 'User Migration', iconClass: 'fa-duotone fa-users', expandedRoute: ''},
        {id: '3', label: 'Recent Login', iconClass: 'fa-sharp fa-solid fa-user', expandedRoute: ''},
        {id: '4', label: 'Recent Impersonation', iconClass: 'fa-regular fa-user-secret', expandedRoute: ''},
        {id: '5', label: 'Bulk Mail Stats', iconClass: 'fa-envelope', expandedRoute: ''},
        {id: '6', label: 'Carrier Performance', iconClass: 'fa-truck', expandedRoute: ''},
    ];

    constructor(private dashboardCardItemService: DashboardCardItemService) { }

    closeExpandedWindow() {
        this._showExpandedVersion = false;
        this._expandedId = '';
    }

    ngOnDestroy(): void {
        this.unsubscribeFromEvents();
    }

    ngOnInit(): void {
        this.subscribeToEvents();
    }

    dashboardListItemSelected(dashboardCardItem: DashboardCardItem){
        alert(dashboardCardItem.label);
    }


    subscribeToEvents() {
        this.dashboardCardExpandRequestedSubscription = this
            .dashboardCardItemService
            .subscribeToDashboardCardExpandRequestedEvent(this, (self: HomeComponent, dashboardCardItem: DashboardCardItem) => {

                if (!!dashboardCardItem ) {
                    self._expandedId = dashboardCardItem.id;
                    self._showExpandedVersion = true;
                }

            });


    }

    unsubscribeFromEvents() {
        
        if (!!this.dashboardCardExpandRequestedSubscription) {
            this.dashboardCardExpandRequestedSubscription.unsubscribe();
            this.dashboardCardExpandRequestedSubscription = null;
        }


    }
}
