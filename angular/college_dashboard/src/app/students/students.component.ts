import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StudentCardComponent } from '../student-card/student-card.component';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, StudentCardComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students = [
    {
      name: 'Alice Johnson',
      rollNo: 'S101',
      marks: 85,
      mobile: '555-1234',
      department: 'Computer Science',
      college: 'Tech University',
      result: 'Pass'
    },
    {
      name: 'Bob Smith',
      rollNo: 'S102',
      marks: 78,
      mobile: '555-5678',
      department: 'Mechanical Engineering',
      college: 'Engineering College',
      result: 'Pass'  
    },
    {
      name: 'Charlie Brown',
      rollNo: 'S103',
      marks: 92,  
      mobile: '555-8765',
      department: 'Electrical Engineering',
      college: 'State University',
      result: 'Pass'
    },
    {
      name: 'Diana Prince',
      rollNo: 'S104',
      marks: 67,
      mobile: '555-4321',
      department: 'Civil Engineering',
      college: 'National Institute',
      result: 'Pass'
    }
  ]
}
