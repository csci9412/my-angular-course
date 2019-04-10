import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit
} from "@angular/core";

import { Album } from "./albums/album.model";
import { ALBUMS } from "./albums/albums.data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
  // Un-comment to prevent UI from updating
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = "My Angular Albums";

}
