import { Component } from "@angular/core";

import { Album } from "./albums/album.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "My Angular Albums";

  constructor() {}

  anumberArray: number [];

  ngOnInit(): void {
    this.anumberArray = [2,4, 6];



  }

}
