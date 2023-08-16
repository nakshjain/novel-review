import {Injectable} from '@angular/core';
import {Novel, NovelsByGenre} from "../types/novels.types";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class NovelService {
  private dataSubject: BehaviorSubject<Novel[]> = new BehaviorSubject<Novel[]>([]);
  public novels$: Observable<Novel[]> = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchNovelData();
  }

  private fetchNovelData(): void {
    const documentId = '1th_UpZjn7ZlLwcD020TiWMGBhpqeUfj8CwhysNjS_r0';
    const exportUrl = `https://docs.google.com/spreadsheets/d/${documentId}/gviz/tq?tqx=out:json`;

    this.http.get(exportUrl, { responseType: 'text' }).subscribe(
      (response: string) => {
        const startIndex = response.indexOf('google.visualization.Query.setResponse');
        if (startIndex !== -1) {
          const jsonStartIndex = response.indexOf('{', startIndex);
          const jsonEndIndex = response.lastIndexOf('}') + 1;
          if (jsonStartIndex !== -1 && jsonEndIndex !== -1) {
            const jsonResponse = JSON.parse(response.substring(jsonStartIndex, jsonEndIndex));
            const rawData = jsonResponse.table.rows;
            const formattedData = rawData.map((row: any) => {
              return {
                name: row.c[0].v,
                genre: row.c[1].v,
                author: row.c[2].v,
                rating: row.c[3].v,
                review: row.c[4].v,
                id: row.c[5].v,
                imageUrl: row.c[6].v,
              };
            });
            this.dataSubject.next(formattedData)
          } else {
            console.error('Unexpected response format:', response);
          }
        } else {
          console.error('Response does not contain expected data:', response);
        }
      },
      (error) => {
        console.error('Error fetching novel data:', error);
      }
    );
  }

  getNovelsAll(): Observable<Novel[]> {
    return this.novels$;
  }

  getAllNovelsByGenre(): Observable<NovelsByGenre[]> {
    return this.novels$.pipe(
      map(
        (novels)=>{
          const novelsByGenre: { [genre: string]: Novel[] } = {};

          novels.forEach((novel) => {
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
      )
    )
  }

  getNovelById(id: string){
    return this.novels$.pipe(
      map((novels)=>{
        return novels.find(novel=>novel.id===id)
      })
    )
  }

  getNovelsByGenre(genre: string){
    return this.novels$.pipe(
      map((novels)=>{
        return novels.filter(novel => novel.genre === genre)
      })
    )
  }
}
