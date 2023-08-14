import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {HomePageComponent} from "./home-page/home-page.component";
import {NovelsComponent} from "./shared/novels.component";
import {NovelComponent} from "./shared/novel/novel.component";
import {BrowseByGenreComponent} from "./browse-by-genre/browse-by-genre.component";
import {AllNovelsComponent} from "./all-novels/all-novels.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'genre', component: BrowseByGenreComponent},
  { path: 'novels', component: AllNovelsComponent},
  { path: 'genre/:genre', component: BrowseByGenreComponent},
  { path: 'novels/novel/:id', component: NovelComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
