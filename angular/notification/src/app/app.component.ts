import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/header/header.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { SenderComponent } from './Components/sender/sender.component';
import { NotificationListComponent } from './Components/notification-list/notification-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, FooterComponent, SenderComponent, NotificationListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'notification';
}
