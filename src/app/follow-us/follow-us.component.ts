import { Component } from '@angular/core';

@Component({
  selector: 'app-follow-us',
  templateUrl: './follow-us.component.html',
  styleUrls: ['./follow-us.component.css']
})
export class FollowUsComponent {
  links=[
    {
      id:'fb',
      name:'Facebook',
      imageLink:'assets/images/social-media/facebook.png',
      link:''
    },
    {
      id:'insta',
      name:'Instagram',
      imageLink:'assets/images/social-media/instagram.png',
      link:''
    },
    {
      id:'tweet',
      name:'Twitter',
      imageLink:'assets/images/social-media/twitter.png',
      link:''
    },
  ]
}
