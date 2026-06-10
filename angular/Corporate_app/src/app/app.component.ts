import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeesComponent } from "./Components/employees/employees.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ EmployeesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Corporate_app';
}
