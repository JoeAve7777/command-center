import { Injectable } from "@angular/core";
import { AppConfiguration } from "./app-configuration";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class JsonAppConfigService extends AppConfiguration {
  constructor(private httClient: HttpClient) {
    super();
  }

  load() {
    return this.httClient
      .get<AppConfiguration>("./app.config.json")
      .toPromise()
      .then((data) => {
        this.apiBaseUrl = data?.apiBaseUrl;
        this.title = data?.title;
        this.copyRight = data?.copyRight;
        this.version = data?.version;
        this.apiAuthenticate = data?.apiAuthenticate;
      })
      .catch(() => {
        console.error("Could not load configuration file");
      });
  }
}
