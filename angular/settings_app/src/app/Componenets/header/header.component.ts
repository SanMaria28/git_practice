import { Component } from '@angular/core';
import { SettingsService } from '../../Services/settings.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // constructor(private settingsService:SettingsService) { }

  // getTheme()
  // {
  //   return this.settingsService.getTheme();
  // }

  // getLanguage()
  // {
  //   return this.settingsService.getLanguage();
  // }

}
