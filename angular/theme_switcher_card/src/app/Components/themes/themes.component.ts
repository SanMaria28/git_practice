import { Component } from '@angular/core';

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.css'
})
export class ThemesComponent {
  themes = [
    {name: 'Light', backgroundColor: 'red', textColor: 'black'},
    {name: 'Dark', backgroundColor: 'black', textColor: 'white'}
  ]

}
