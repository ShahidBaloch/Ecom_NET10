import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../../../core/services/shop';
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-product-details',
  imports: [MatIcon,
    MatFormField,
    MatDivider,
    MatLabel,
    CurrencyPipe,
    MatButton,
    MatFormField,
    MatInput],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  private shopService = inject(ShopService);
  private activatedRoute = inject(ActivatedRoute);
  product?: Product;

  ngOnInit() {
    this.loadProduct();
  }
  loadProduct() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!id) return;
    this.shopService.getProduct(+id).subscribe({
      next: product => this.product = product,
      error: error => console.log(error)
    });
  }
}
