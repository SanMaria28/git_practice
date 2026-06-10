import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FinalPricePipe } from '../../final-price-pipe';
import { DiscountBadgePipe } from '../../discount-badge-pipe';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FinalPricePipe, DiscountBadgePipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = [
    {
      name:'Laptop',
      price: 60000,
      discount:0.09
    },
    {
      name:'Camera',
      price: 320000,
      discount:0.22
    },
    {
      name:'HardDisk',
      price: 320000,
      discount:0.15
    },
    {
      name:'Pendrive',
      price: 900,
      discount:0.05
    },
    {
      name:'Lens',
      price: 16000,
      discount:0.20
    }
  ];
}
