import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatBadge } from '@angular/material/badge';

@Component({
  selector: 'app-header',
  imports: [MatIcon, MatButton, MatBadge],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
