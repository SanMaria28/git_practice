import { Component } from '@angular/core';
import { SettingsService } from '../../Services/settings.service';
import { NgStyle, CommonModule } from '@angular/common';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NgStyle, CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  constructor(private settingsService:SettingsService) { }
  
    getTheme()
    {
      return this.settingsService.getTheme();
    }
  
    getLanguage()
    {
      return this.settingsService.getLanguage();
    }
}
