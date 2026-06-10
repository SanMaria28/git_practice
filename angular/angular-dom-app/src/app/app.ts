import { CommonModule } from '@angular/common';
import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Highlight } from './highlight';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Highlight],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation:ViewEncapsulation.None
})
export class App {
  showCard = true;

  toggleCard() {
    this.showCard = !this.showCard;
  }

}
