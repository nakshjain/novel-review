import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Novel, NovelsByGenre} from "../types/novels.types";

@Injectable({
  providedIn: 'root',
})
export class NovelService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllNovels(): Observable<Novel[]> {
    return this.http.get<Novel[]>(`${this.apiUrl}/api/allNovels`);
  }

  getNovelById(id: string): Observable<Novel> {
    console.log(`${this.apiUrl}/novels/${id}`)
    return this.http.get<Novel>(`${this.apiUrl}/api/novels/${id}`);
  }

  getAllNovelsByGenre(): Observable<NovelsByGenre[]> {
    return this.http.get<NovelsByGenre[]>(`${this.apiUrl}/api/allNovelsByGenre`);
  }

  getNovelsByName(name: string): Observable<Novel[]> {
    const params = new HttpParams().set('name', name);
    return this.http.get<Novel[]>(`${this.apiUrl}/allNovelsByName`, { params });
  }
}
