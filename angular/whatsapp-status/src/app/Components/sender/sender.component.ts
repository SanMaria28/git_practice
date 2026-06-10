import { Component } from '@angular/core';
import { StatusService } from '../../Services/status.service';

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {

  constructor(private statusService: StatusService) {}

  updateStatus(newStatus: string) {
    this.statusService.setStatus(newStatus);
  }

}
