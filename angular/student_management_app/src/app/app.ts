import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "Student Management App";

  students:any[] =[];

  student={
    name:'',
    email:'',
    course:''
  };

  addStudent(form:any){
    return this.students.push({...this.student});
    form.resetForm();
  }

  deleteStudent(index:number){
    return this.students.splice(index,1);
  }
}
