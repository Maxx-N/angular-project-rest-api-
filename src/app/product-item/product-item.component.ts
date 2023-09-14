import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  isEditing = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  onToggleEditMode() {
    this.isEditing = !this.isEditing;
  }

  onEditProduct(name: string, price: number) {
    if (!name || !price) {
      return;
    }
    this.productService.putProduct(this.product.id, name, price);
  }

  onDeleteProduct() {
    this.productService.deleteProduct(this.product.id);
  }
}
