import { Component, inject, OnInit } from '@angular/core';
import { Header } from "./layout/header/header";

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header,RouterOutlet]
})
export class App  {
    title = 'Ecom App';

}
