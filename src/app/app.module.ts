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
import { ImageSliderComponent } from './shared/image-slider/image-slider.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import {NgxUiLoaderModule} from "ngx-ui-loader";
import {NovelsComponent} from "./shared/novels.component";
import {NovelComponent} from './shared/novel/novel.component';
import {FormsModule} from "@angular/forms";
import { FilterComponent } from './shared/filter/filter.component';
import { FollowUsComponent } from './follow-us/follow-us.component';
import { BrowseByGenreComponent } from './browse-by-genre/browse-by-genre.component';
import { AllNovelsComponent } from './all-novels/all-novels.component';
import { NovelsDisplayComponent } from './shared/novels-display/novels-display.component';
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {NovelRatingComponent} from "./shared/novel/novel-rating/novel-rating.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ImageSliderComponent,
    NovelsComponent,
    NovelComponent,
    FilterComponent,
    FollowUsComponent,
    BrowseByGenreComponent,
    AllNovelsComponent,
    NovelsDisplayComponent,
    NovelRatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule,
    SlickCarouselModule,
    NgxUiLoaderModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
