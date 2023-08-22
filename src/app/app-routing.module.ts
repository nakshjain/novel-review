import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {HomePageComponent} from "./home-page/home-page.component";
import {ProductComponent} from "./shared/product/product.component";
import {BrowseByGenreComponent} from "./browse-by-genre/browse-by-genre.component";
import {AllProductsComponent} from "./all-products/all-products.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'genre', component: BrowseByGenreComponent},
  { path: 'products', component: AllProductsComponent},
  { path: 'genre/:genre', component: BrowseByGenreComponent},
  { path: 'product/:id', component: ProductComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    }),
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
