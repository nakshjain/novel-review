import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import { HomePageComponent } from './home-page/home-page.component';
import { NovelImageSliderComponent } from './home-page/image-slider/novel-image-slider.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import {NgxUiLoaderModule} from "ngx-ui-loader";
import {NovelsComponent} from "./shared/novels.component";
import {NovelComponent} from './shared/novel/novel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NovelsServices} from "./api/novel-service/novels.services";
import {FormsModule} from "@angular/forms";
import { SearchComponent } from './shared/search/search.component';
import { FollowUsComponent } from './follow-us/follow-us.component';
import { BrowseByGenreComponent } from './browse-by-genre/browse-by-genre.component';
import { AllNovelsComponent } from './all-novels/all-novels.component';
import { NovelsDisplayComponent } from './shared/novels-display/novels-display.component';
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NovelImageSliderComponent,
    NovelsComponent,
    NovelComponent,
    SearchComponent,
    FollowUsComponent,
    BrowseByGenreComponent,
    AllNovelsComponent,
    NovelsDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule,
    SlickCarouselModule,
    NgxUiLoaderModule,
    NgbModule,
    MatCardModule,
  ],
  providers: [NovelsServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
