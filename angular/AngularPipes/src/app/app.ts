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
  protected readonly title = signal('AngularPipes');
  name="Christ university";
  today=new Date();
  amount = 500000;
  percentage=0.84;
  text="Angular is one of the most poppular frontent framework.";
  student =[
    {name:'Surya',
    age:21,
    dept:'CSE',
    year:3,
    yop:2024,
    joinDate:2021,
    college: 'Christ University'
    }
  ];
}
