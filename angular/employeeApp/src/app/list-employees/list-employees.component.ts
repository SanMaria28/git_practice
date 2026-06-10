import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css'
})
export class ListEmployeesComponent {
  employees : Employee[]= [
    {id: 101, fname:'George', lname: 'Thomas', doj:'2020-12-14', salary:40000 },
    {id: 102, fname:'Joy', lname: 'James', doj:'2021-12-14', salary:55000 },
    {id: 103, fname:'Julia', lname: 'K', doj:'2020-02-10', salary:60000 }
  ];
  newEmployeeId=0;
  newEmployeeFName="";
  newEmployeeLName="";
  newEmployeeDoj="";
  newEmployeeSalary=0;

  addEmployee()
  {
    if(!this.newEmployeeFName.trim() && !this.newEmployeeDoj.trim())
    {
      alert("Employee details is mandatory");
      return;
    }
    const newEmployee: Employee = {
      id: this.newEmployeeId,
      fname:this.newEmployeeFName,
      lname:this.newEmployeeLName,
      doj:this.newEmployeeDoj,
      salary:this.newEmployeeSalary
    }
    this.employees.push(newEmployee);
    this.newEmployeeFName = '';
  }
  edit(salary:number)
  {
    salary = salary + 5000;
  
  }
  deleteEmp(id : number)
  {
    this.employees = this.employees.filter(e => e.id !== id);
  }
}


