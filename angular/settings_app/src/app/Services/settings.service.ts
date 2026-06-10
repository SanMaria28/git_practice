import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private theme= 'Light';
  private language='EN';

  setTheme(theme:string)
  {
    this.theme = theme;
  }
  getTheme()
  {
    return this.theme;
  }

  setLanguage(lang:string)
  {
    this.language = lang;
  }
  getLanguage()
  {
    return this.language;
  }

}
