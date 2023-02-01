import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardCardItem } from '../dashboard-card-item.model';
import { DashboardCardItemService } from '../dashboard-card-item.service';

@Component({
    selector: 'app-dashboard-thumbnail',
    templateUrl: './dashboard-thumbnail.component.html',
    styleUrls: ['./dashboard-thumbnail.component.scss']
})
export class DashboardThumbnailComponent implements OnDestroy, OnInit {
    @Input() thumbnail: DashboardCardItem;
    @ViewChild('dtn') dtnElement: ElementRef;

    private dashboardCardItemRemovedSubscription: Subscription = null;

    constructor(private dashboardCardItemService: DashboardCardItemService) { 

    }

    onClick() {

        this.showDisabled();
        this.dashboardCardItemService.broadcastDashboardCardItemSelectedEvent(this.thumbnail);    
    }

    ngOnDestroy(): void {        
        this.unsubscribeFromEvents();
    }

    ngOnInit(): void {
        this.subscribeToEvents();
    }

    showDisabled() {
        this.dtnElement.nativeElement.classList.add('scrollable-item-disabled');
        this.dtnElement.nativeElement.attributes["disabled"] = 'disabled';
    }

    showEnabled() {
        this.dtnElement.nativeElement.classList.remove('scrollable-item-disabled');
        this.dtnElement.nativeElement.attributes["disabled"] = '';
    }

    subscribeToEvents() {
        this.dashboardCardItemRemovedSubscription = this
            .dashboardCardItemService
            .subscribeToDashboardCardItemRemovedEvent(this, (self: DashboardThumbnailComponent, dashboardCardItem: DashboardCardItem) => {

                if (!!dashboardCardItem && dashboardCardItem.id === self.thumbnail.id) {
                    self.showEnabled();
                    // alert('REMOVED: ' + dashboardCardItem.label);
                }
                
            });
    }

    unsubscribeFromEvents() {
        

        if (!!this.dashboardCardItemRemovedSubscription) {
            this.dashboardCardItemRemovedSubscription.unsubscribe();
            this.dashboardCardItemRemovedSubscription = null;
        }

    }    

}
