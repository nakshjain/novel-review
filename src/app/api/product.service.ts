import {Injectable} from '@angular/core';
import {product, productsByGenre} from "../types/products.types";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private dataSubject: BehaviorSubject<product[]> = new BehaviorSubject<product[]>([]);
  public products$: Observable<product[]> = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchproductData();
  }

  private fetchproductData(): void {
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
                id: row.c[0].v,
                name: row.c[1].v,
                author: row.c[2].v,
                genre: row.c[3].v,
                rating: row.c[4].v,
                imageUrl: row.c[5].v,
                review: row.c[6].v,
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
        console.error('Error fetching product data:', error);
      }
    );
  }

  getproductsAll(): Observable<product[]> {
    return this.products$;
  }

  getAllproductsByGenre(): Observable<productsByGenre[]> {
    return this.products$.pipe(
      map(
        (products)=>{
          const productsByGenre: { [genre: string]: product[] } = {};

          products.forEach((product) => {
            if (productsByGenre[product.genre]) {
              productsByGenre[product.genre].push(product);
            } else {
              productsByGenre[product.genre] = [product];
            }
          });
          return Object.keys(productsByGenre).map(
            (genre) => ({
              genre,
              products: productsByGenre[genre],
            })
          );
        }
      )
    )
  }

  getproductById(id: string){
    return this.products$.pipe(
      map((products)=>{
        return products.find(product=>product.id===id)
      })
    )
  }

  getproductsByGenre(genre: string){
    return this.products$.pipe(
      map((products)=>{
        return products.filter(product => product.genre === genre)
      })
    )
  }
}
