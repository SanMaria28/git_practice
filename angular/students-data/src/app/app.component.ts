import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ListStudentComponent } from "./list-student/list-student.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, ListStudentComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isDisabled=false;
  username='';}
