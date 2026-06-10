import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Componenets/header/header.component";
import { ThemeSwitcherComponent } from "./Componenets/theme-switcher/theme-switcher.component";
import { LangSwitcherComponent } from "./Componenets/lang-switcher/lang-switcher.component";
import { ContentComponent } from "./Componenets/content/content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, ThemeSwitcherComponent, LangSwitcherComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'settings_app';
}
