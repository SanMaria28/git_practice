import { Component } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    {
      productName: 'Laptop',
      price:40000,
      category:'Electronics',
      rating:4.5
    },
    {
      productName: 'Sofa',
      price:30000,
      category:'Furniture',
      rating:3.5
    },
    {
      productName: 'Kettle',
      price:20000,
      category:'Electronics',
      rating:4.3
    },
    {
      productName: 'Washing Machine',
      price:80000,
      category:'Electronics',
      rating:4.0
    },
    {
      productName: 'Shirt',
      price:2000,
      category:'Clothing',
      rating:4.8
    }

  ]

}
