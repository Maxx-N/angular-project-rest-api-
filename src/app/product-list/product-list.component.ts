import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products$ = this.productService.products$;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts();
  }

  onAddProduct(name: string, price: number) {
    if (!name || !price) {
      return;
    }
    this.productService.postProduct(name, price);
  }
}
