import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pretty Little Pages';
  navbarHeader: any[] = [
    {
      id: 'home',
      name: 'Home',
      link: 'home',
    },
    {
      id: 'genre',
      name: 'Genre',
      link: 'genre',
    },
    {
      id: 'novels',
      name: 'Novels',
      link: 'novels',
    },
    {
      id: 'novels',
      name: 'Novels',
      link: 'novels',
    },
  ];
}
