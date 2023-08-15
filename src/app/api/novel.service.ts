import {Injectable} from '@angular/core';
import novelReviews from '../../assets/novel-review.json'
import {Novel, NovelsByGenre} from "../types/novels.types";

@Injectable({
  providedIn: 'root',
})
export class NovelService {
  private data: Novel[] = novelReviews;

  constructor() {
  }

  getNovelsAll(): any[] {
    return this.data;
  }

  getAllNovelsByGenre(): NovelsByGenre[] {
    const novelsByGenre: { [genre: string]: Novel[] } = {};

    this.data.forEach((novel) => {
      if (novelsByGenre[novel.genre]) {
        novelsByGenre[novel.genre].push(novel);
      } else {
        novelsByGenre[novel.genre] = [novel];
      }
    });

    return Object.keys(novelsByGenre).map(
      (genre) => ({
        genre,
        novels: novelsByGenre[genre],
      })
    );
  }

  getNovelById(id: string): Novel | undefined {
    return this.data.find(novel => novel.id === id);
  }

  getNovelsByGenre(genre: string): Novel[] {
    return this.data.filter(novel => novel.genre === genre);
  }
}
