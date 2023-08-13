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
import {NovelsComponent} from "./novels/novels.component";
import {NovelComponent} from './novels/novel/novel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NovelsServices} from "./api/novel-service/novels.services";
import {FormsModule} from "@angular/forms";
import { SearchComponent } from './novels/search/search.component';
import { FollowUsComponent } from './follow-us/follow-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NovelImageSliderComponent,
    NovelsComponent,
    NovelComponent,
    SearchComponent,
    FollowUsComponent,
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
    SlickCarouselModule,
    NgxUiLoaderModule,
    NgbModule,
  ],
  providers: [NovelsServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
