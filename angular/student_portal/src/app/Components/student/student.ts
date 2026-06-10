import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  studentId: string | null ='';

  student:any;

  studentsData = [
    {id:'101', name:'Alice Johnson', age:20, course:'Computer Science', year:'2nd Year', email:'alice.johnson@example.com'},
    {id:'102', name:'Bob Smith', age:22, course:'Mechanical Engineering', year:'3rd Year', email:'bob.smith@example.com'},
    {id:'103', name:'Charlie Brown', age:21, course:'Business Administration', year:'2nd Year', email:'charlie.brown@example.com'},
    {id:'104', name:'Diana Prince', age:23, course:'Psychology', year:'4th Year', email:'diana.prince@example.com'},
    {id:'105', name:'Ethan Hunt', age:24, course:'International Relations', year:'4th Year', email:'ethan.hunt@example.com'},
  ];

 
  constructor(private route: ActivatedRoute){ 
    this.studentId = this.route.snapshot.paramMap.get('id');
    this.loadStudent();
  }

  loadStudent(){
    this.student = this.studentsData.find(s => s.id === this.studentId);
  }

}