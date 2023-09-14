import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly apiUrl = 'api/products';
  private readonly _products$ = new BehaviorSubject<Product[]>([]);
  readonly products$ = this._products$.asObservable();

  constructor(private http: HttpClient) {}

  getProducts() {
    this.http.get<Product[]>(this.apiUrl).subscribe((products) => {
      this._products$.next(products);
    });
  }

  postProduct(name: string, price: number) {
    this.http.post(this.apiUrl, { name, price }).subscribe(() => {
      this.getProducts();
    });
  }

  putProduct(id: number, name: string, price: number) {
    this.http.put(this.apiUrl, { id, name, price }).subscribe(() => {
      this.getProducts();
    });
  }

  deleteProduct(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.getProducts();
    });
  }
}
