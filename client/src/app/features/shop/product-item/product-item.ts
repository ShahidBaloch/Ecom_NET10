import { Component, Input } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { CurrencyPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-product-item',
  imports: 
  [MatCard,
    MatCardContent,
    MatCardActions,
    MatIcon,
    CurrencyPipe,
    MatButton],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
@Input() product?: Product;
}
