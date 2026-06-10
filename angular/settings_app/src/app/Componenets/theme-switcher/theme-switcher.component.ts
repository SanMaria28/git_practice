import { Component } from '@angular/core';
import { SettingsService } from '../../Services/settings.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.css'
})
export class ThemeSwitcherComponent {

  constructor(private settingsService:SettingsService) { }

  changeTheme(theme:string)
  {
    this.settingsService.setTheme(theme);
  }

}
