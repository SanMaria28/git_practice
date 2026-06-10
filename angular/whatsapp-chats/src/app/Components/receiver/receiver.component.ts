import { Component } from '@angular/core';
import { ChatService } from '../../Services/chat.service';

@Component({
  selector: 'app-receiver',
  standalone: true,
  imports: [],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css'
})
export class ReceiverComponent {
  constructor(private chatService: ChatService) { }

  get message()
  {
    return this.chatService.getMessage();
  }
}
