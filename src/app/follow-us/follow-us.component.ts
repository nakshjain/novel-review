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
      imageLink:'https://drive.google.com/uc?export=view&id=1VKWkIxPL1AaxRAPKHCU-BvugKEzEtvxL',
      link:''
    },
    {
      id:'insta',
      name:'Instagram',
      imageLink:'https://drive.google.com/uc?export=view&id=1gEvdJ10RPMDeA_6ABs85kA5XGn_QflQT',
      link:''
    },
    {
      id:'tweet',
      name:'Twitter',
      imageLink:'https://drive.google.com/uc?export=view&id=1jNGbsTGDtHJHnUnKZk8hoY0iPIb9CxVb',
      link:''
    },
  ]
}
