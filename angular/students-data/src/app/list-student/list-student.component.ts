import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent {
  students =[
    {name: "Raj", rollNumber:1, department:"Science", college:"ABC ", location:"New York"},
    {name: "Simran", rollNumber:2, department:"Commerce", college:"XYZ ", location:"Los Angeles"},
    {name: "Amit", rollNumber:3, department:"Arts", college:"LMN ", location:"Chicago"},
    {name: "Neha", rollNumber:4, department:"Science", college:"PQR ", location:"Houston"},
    {name: "Vikram", rollNumber:5, department:"Commerce", college:"DEF ", location:"Phoenix"}
   
  ];
  name="";
  display()
  {
   alert(this.name);
  }
}
