import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import {GithubService} from './github.service';

import { RepoComponent } from './repo/repo.component';
import { RepoCreatorComponent } from './repo-creator/repo-creator.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { RepolistComponent } from './repolist/repolist.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    RepoComponent,
    RepoCreatorComponent,
    WishlistComponent,
    DeleteComponent,
    UpdateComponent,
    RepolistComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
