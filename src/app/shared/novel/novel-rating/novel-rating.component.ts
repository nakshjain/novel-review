import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-novel-rating',
  templateUrl: './novel-rating.component.html',
  styleUrls: ['./novel-rating.component.css']
})
export class NovelRatingComponent implements OnChanges{
  @Input()
  rating!: number;
  stars!: number[];
  filledStars!: number;
  hasHalfStar!: boolean;

  ngOnChanges(): void {
    this.stars = [1, 2, 3, 4, 5];
    this.filledStars = Math.round(this.rating);
    const fractionalPart=this.rating - Math.floor(this.rating)
    this.hasHalfStar = fractionalPart<0.5 && fractionalPart!=0
  }
}
