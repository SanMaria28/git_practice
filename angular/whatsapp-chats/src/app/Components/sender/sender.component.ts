import { Component } from '@angular/core';
import { ChatService } from '../../Services/chat.service';

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {
  constructor(private chatService: ChatService) { }

  send(msg:string)
  {
    this.chatService.sendMessage(msg);
  }
}
