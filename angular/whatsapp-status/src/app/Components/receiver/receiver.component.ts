import { Component } from '@angular/core';
import { StatusService } from '../../Services/status.service';

@Component({
  selector: 'app-receiver',
  standalone: true,
  imports: [],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css'
})
export class ReceiverComponent {

  constructor(private statusService: StatusService) {}

  get update()
  {
    return this.statusService.getStatus();
  }
  
}
