import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productId: string | null = '';
  product: any;
  products = [
    {
      id:'101',
      name:'Laptop',
      price: 32000,
      category:'Electronics',
      rating:4.3
    },
    {
      id:'102',
      name:'Smartphone',
      price: 15000,
      category:'Electronics',
      rating:4.5
    },
    {
      id:'103',
      name:'Headphones',
      price: 2000,
      category:'Electronics',
      rating:4.0
    },
    {
      id:'104',
      name:'Shoes',
      price: 3000,
      category:'Apparel',
      rating:4.2
    },
    {
      id:'105',
      name:'Watch',
      price: 5000,
      category:'Accessories',
      rating:4.1
    }
  ];

  constructor(private route: ActivatedRoute) {
    this.productId = this.route.snapshot.paramMap.get('id');
  }


}

