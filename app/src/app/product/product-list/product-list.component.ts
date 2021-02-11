import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../products';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public products = PRODUCTS;

  constructor() {}

  ngOnInit(): void {
    console.log(this.products);
  }

  click(): void {
    let product: Product = { name: 'test', id: 1 };
    this.products.push(product);
  }
}
