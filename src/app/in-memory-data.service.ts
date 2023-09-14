import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const products: Product[] = [{ id: 1, name: 'micro-ondes', price: 50 }];
    return { products };
  }

  genId(products: Product[]): number {
    return products.length > 0
      ? Math.max(...products.map((hero) => hero.id)) + 1
      : 1;
  }
}
