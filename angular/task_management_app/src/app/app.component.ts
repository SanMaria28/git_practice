import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task_management_app';
  // version = "18";
  // name = "San Maria";
  // age ="19";
  // place = "Madhya Pradesh";
  // hobby = "Dance";
  // course = "Engineering";

  name="";
  course="";
  output= {
    name:"",
    course:""
  }
  handleButtonClick(){
    this.output.name = this.name;
    this.output.course = this.course;
  }
}
