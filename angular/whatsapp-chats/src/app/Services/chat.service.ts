import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private message ='';

  sendMessage(msg: string) {
    this.message = msg;
  }

  getMessage(): string {
    return this.message;
  }
}
