import { dashCaseToCamelCase } from "@angular/compiler/src/util";
import { Component, OnInit } from "@angular/core";
import { DashboardCardItem } from "@app/screens/home/dashboard/dashboard-card-item.model";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    dashboardCardItems: Array<DashboardCardItem> = [
        {
            id: "1",
            label: "Successful Logins",
            iconClass: "fa-sign-in",
            expandedRoute: "home/data-grid",
        },
        {
            id: "2",
            label: "User Migration",
            iconClass: "fa-duotone fa-users",
            expandedRoute: "",
        },
        {
            id: "3",
            label: "Recent Login",
            iconClass: "fa-sharp fa-solid fa-user",
            expandedRoute: "",
        },
        {
            id: "4",
            label: "Recent Impersonation",
            iconClass: "fa-regular fa-user-secret",
            expandedRoute: "",
        },
        {
            id: "5",
            label: "Bulk Mail Stats",
            iconClass: "fa-envelope",
            expandedRoute: "",
        },
        {
            id: "6",
            label: "Carrier Performance",
            iconClass: "fa-truck",
            expandedRoute: "",
        },
    ];

    constructor() {}

    ngOnInit(): void {}

    dashboardListItemSelected(dashboardCardItem: DashboardCardItem) {
        alert(dashboardCardItem.label);
    }
}
