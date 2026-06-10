import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Output() sendMessage = new EventEmitter<string>();

sendData(){
  this.sendMessage.emit("Hello Parent this Message from Child Component");
}
}
