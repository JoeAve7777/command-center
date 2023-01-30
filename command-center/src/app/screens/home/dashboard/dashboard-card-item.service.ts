import { Injectable } from '@angular/core';
import { DashboardCardItem } from '@app/screens/home/dashboard/dashboard-card-item.model';
import { Subject, Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DashboardCardItemService {

    private dashboardCardItemSelected: Subject<DashboardCardItem> = new Subject<DashboardCardItem>();
    private dashboardCardItemRemoved: Subject<DashboardCardItem> = new Subject<DashboardCardItem>();

    constructor() { 
      

    }

    public broadcastDashboardCardItemSelectedEvent(dashboardCardItem: DashboardCardItem): void
    {
     //   if (this.dashboardCardItemSelected.value !== dashboardCardItem)
     //   {
            this.dashboardCardItemSelected.next(dashboardCardItem);
     //   }

    }

    public subscribeToDashboardCardItemSelectedEvent(self: any, callback: Function): Subscription
    {
        return this.dashboardCardItemSelected.subscribe((dashboardCardItem: DashboardCardItem): void =>
        {

            if (!!callback)
            {
                callback(self, dashboardCardItem);
            }

        });
    }    

    public broadcastDashboardCardItemRemovedEvent(dashboardCardItem: DashboardCardItem): void
    {
       // if (this.dashboardCardItemRemoved.value !== dashboardCardItem)
       // {
            this.dashboardCardItemRemoved.next(dashboardCardItem);
       // }
        
    }

    public subscribeToDashboardCardItemRemovedEvent(self: any, callback: Function): Subscription
    {
        return this.dashboardCardItemRemoved.subscribe((dashboardCardItem: DashboardCardItem): void =>
        {

            if (!!callback)
            {
                callback(self, dashboardCardItem);
            }

        });
    }

}
