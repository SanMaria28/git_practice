import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeCardComponent } from "../employee-card/employee-card.component";

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, EmployeeCardComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  employees = [
    {empID: 101, empName: 'Alice', role: 'Accountant', experience: '5 years', salary: 60000},
    {empID: 102, empName: 'Bob', role: 'Developer', experience: '3 years', salary: 75000},
    {empID: 103, empName: 'Charlie', role: 'Designer', experience: '4 years', salary: 70000},
    {empID: 104, empName: 'Diana', role: 'Manager', experience: '6 years', salary: 90000},
    {empID: 105, empName: 'Ethan', role: 'Intern', experience: '1 year', salary: 30000}
  ];  

}
