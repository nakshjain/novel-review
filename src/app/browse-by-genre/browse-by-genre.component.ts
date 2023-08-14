import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-browse-by-genre',
  templateUrl: './browse-by-genre.component.html',
  styleUrls: ['./browse-by-genre.component.css']
})
export class BrowseByGenreComponent implements OnInit{
  title='Browse By Genre'
  genre: any;

  constructor(private activatedRoute: ActivatedRoute) {
    console.log('genre')
  }

  ngOnInit(): void {
    this.genre = this.activatedRoute.snapshot.paramMap.get('genre');
  }
}
