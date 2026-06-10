import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CourseCardComponent } from "../course-card/course-card.component";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  courses = [
    {
      title: 'Introduction to Angular',
      duration: '2 months',
      level: 'Beginner',
      price: 14999
    },
    {
      title: 'React ',
      duration: '2 months',
      level: 'Intermediate',
      price: 12000
    },
    {
      title: 'Java',
      duration: '1.5 months',
      level: 'Beginner',
      price: 10000
    },
    {
      title: 'Spring Boot',
      duration: '2 months',
      level: 'Advanced',
      price: 13000
    },
    {
      title: 'Android Development',
      duration: '3 months',
      level: 'Intermediate',
      price: 14000
    }
  ]
}
