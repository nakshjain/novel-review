import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Novel, NovelsByGenre} from "../types/novels.types";

@Injectable({
  providedIn: 'root',
})
export class NovelService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllNovels(): Observable<Novel[]> {
    return this.http.get<Novel[]>(`${this.baseUrl}/api/allNovels`);
  }

  getNovelById(id: string): Observable<Novel> {
    console.log(`${this.baseUrl}/novels/${id}`)
    return this.http.get<Novel>(`${this.baseUrl}/api/novels/${id}`);
  }

  getAllNovelsByGenres(): Observable<NovelsByGenre[]> {
    return this.http.get<NovelsByGenre[]>(`${this.baseUrl}/api/allNovelsByGenre`);
  }

  getAllNovelsByGenre(genre: string): Observable<any> {
    console.log(genre)
    const url = `${this.baseUrl}/api/allNovelsByGenre/${genre}`;
    return this.http.get(url);
  }

  getNovelsByName(name: string): Observable<Novel[]> {
    const params = new HttpParams().set('name', name);
    return this.http.get<Novel[]>(`${this.baseUrl}/allNovelsByName`, { params });
  }
}
