import { Component } from '@angular/core';
import { SettingsService } from '../../Services/settings.service';

@Component({
  selector: 'app-lang-switcher',
  standalone: true,
  imports: [],
  templateUrl: './lang-switcher.component.html',
  styleUrl: './lang-switcher.component.css'
})
export class LangSwitcherComponent {

  constructor(private settingsService:SettingsService) { }

  changeLanguage(lang:string)
  {
    this.settingsService.setLanguage(lang);
  }

}
