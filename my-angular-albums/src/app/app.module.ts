import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { AlbumCardComponent } from './albums/album-card/album-card.component';
import { FamilyComponent } from './family/family.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { FriendsComponent } from './friends/friends.component';
import { FamilyListComponent } from './family-list/family-list.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { HobbiesListComponent } from './hobbies-list/hobbies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumCardComponent,
    FamilyComponent,
    HobbiesComponent,
    FriendsComponent,
    FamilyListComponent,
    FriendsListComponent,
    HobbiesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
