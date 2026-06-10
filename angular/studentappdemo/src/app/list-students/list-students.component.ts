import { Component } from '@angular/core';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.css'
})
export class ListStudentsComponent {
  students = [
    {id:101, name:"San ",age:19, major:"CS-AIML", gpa:3.5},
    {id:102, name:"Gloria",age:20, major:"Accounts",gpa:2.32},
    {id:103, name:"Dominic", age:21, major:"English",gpa:3.95}
  ];

  newStudentId=0;
  newStudentName="";
  newStudentAge=0;
  newStudentMajor="";
  newStudentGpa=0;

  addStudent()
  {
    if(!this.newStudentName.trim() && !this.newStudentMajor.trim())
    {
      alert("Student details is mandatory");
      return;
    }
    const newStudent = {
      id: this.newStudentId,
      name:this.newStudentName,
      age: this.newStudentAge,
      major:this.newStudentMajor,
      gpa:this.newStudentGpa
    }
    this.students.push(newStudent);
    this.newStudentName = '';
    
  }
}
  
