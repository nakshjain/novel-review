import { Component } from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  title='GENRE'
  images= [
    {
      id:'img-1',
      link:'assets/images/naksh/img1.jpg'
    },
    {
      id:'img-2',
      link:'assets/images/naksh/img2.jpg'
    },
    {
      id:'img-3',
      link:'assets/images/naksh/img3.jpg'
    },
    {
      id:'img-4',
      link:'assets/images/naksh/img4.jpg'
    },
    {
      id:'img-5',
      link:'assets/images/naksh/img5.jpg'
    },
    {
      id:'img-6',
      link:'assets/images/naksh/img6.jpg'
    },
    {
      id:'img-7',
      link:'assets/images/naksh/img7.jpg'
    },
    {
      id:'img-8',
      link:'assets/images/naksh/img8.jpg'
    },
    {
      id:'img-9',
      link:'assets/images/naksh/img9.jpg'
    },
    {
      id:'img-10',
      link:'assets/images/naksh/img10.jpg'
    },
    {
      id:'img-11',
      link:'assets/images/naksh/img11.jpg'
    },
    {
      id:'img-12',
      link:'assets/images/naksh/img12.jpg'
    },
    {
      id:'img-13',
      link:'assets/images/naksh/img13.jpg'
    },
    {
      id:'img-14',
      link:'assets/images/naksh/img14.jpg'
    },
    {
      id:'img-15',
      link:'assets/images/naksh/img15.jpg'
    },
    {
      id:'img-16',
      link:'assets/images/naksh/img16.jpg'
    },
  ]

  constructor(private ngxService: NgxUiLoaderService) {}
  ngOnInit() {
    this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop();
    }, 1000);
  }
}
