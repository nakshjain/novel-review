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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NovelImageSliderComponent,
    NovelsComponent,
    NovelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
