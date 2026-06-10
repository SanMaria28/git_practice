import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FinalSalaryPipe } from '../../final-salary-pipe';
import { SalaryGradePipe } from '../../salary-grade-pipe';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule, FinalSalaryPipe, SalaryGradePipe],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employees = [
    {
      name: 'John Doe',
      position: 'Software Engineer',
      basicSalary: 50000,
      bonus: 0.20
    },
    {
      name: 'Jane Smith',
      position: 'Project Manager',
      basicSalary: 50000,
      bonus: 0.10
    },
    {
      name: 'Michael Johnson',
      position: 'UX Designer',
      basicSalary: 15000,
      bonus: 0.15
    },
    {
      name: 'Emily Davis',
      position: 'Data Analyst',
      basicSalary: 35000,
      bonus: 0.18
    },
    {
      name: 'David Wilson',
      position: 'DevOps Engineer',
      basicSalary: 55000,
      bonus: 0.22
    }
  ]

}
