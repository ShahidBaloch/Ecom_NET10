import { Component, inject, OnInit } from '@angular/core';
import { Header } from "./layout/header/header";
import { HttpClient } from '@angular/common/http';
import { Product } from './shared/models/product';
import { Pagination } from './pagination';
import { Shop } from "./features/shop/shop";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, Shop]
})
export class App  {
    title = 'Ecom App';
  //  baseUrl = 'https://localhost:5001/api/';
  // private http = inject(HttpClient);

  // products: Product[] = [];

  // ngOnInit() {
  //   this.http.get<Pagination<Product>>(this.baseUrl + 'products').subscribe({
  //     next: response => this.products = response.data,
  //     error: error => console.error(error),
  //     complete: () => console.log('complete')
  //   })
  // }
}
