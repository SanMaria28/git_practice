import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemesComponent } from "./Components/themes/themes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ThemesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'theme_switcher_card';
}
