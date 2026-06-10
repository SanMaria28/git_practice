import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('StudentProfileCard');
  name="Dominic John";
  dob="2000-01-01";
  marks=0.789;
  fees = 100000;
  bio = "Engineer, designer, and entrepreneur. Passionate about creating innovative solutions and building impactful products.";
  student = [
    {
      name: "Dominic John",
      dob: "2000-01-01",
      marks: 0.789,
      fees: 100000,
      class: "10th Grade"
    }
  ];

}