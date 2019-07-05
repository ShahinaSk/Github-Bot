import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { RepoComponent } from './repo/repo.component';
import { RepoCreatorComponent } from './repo-creator/repo-creator.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { RepolistComponent } from './repolist/repolist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
 {path:'result/:userName',component:SearchComponent},
 {path:'repos',component: RepoComponent},
 {path:'new',component: RepoCreatorComponent},
 {path:'save/:name/:description',component:WishlistComponent},
 {path:'delete/:name',component:DeleteComponent},
 {path:'update/:name',component:UpdateComponent},
 {path:'view',component:RepolistComponent},
 {path:'create',component:AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
