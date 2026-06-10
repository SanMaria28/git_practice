import { Component } from '@angular/core';
import { Task } from '../models/task';



@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrl: './list-all.component.css'
})
export class ListAllComponent {
  tasks: Task[]= [
    {id: 1, name: "Complete Unit 2", completed:true},
    {id: 2, name: "Learn SQL", completed:true},
    {id: 3, name: "Learn JavaScript", completed:true}
  ];
  employee = {
    name:"John Doe",
    age:30,
    salary: 50000,
    doj: new Date('2020-01-15')
  }
  //to add a new task
  newTaskId=0;
  newTaskName="";

  addTask()
  {
    if(!this.newTaskName.trim()) //task name is empty or not
    {
      alert("Task Name is mandatory");
      return;
    }
    const newTask: Task = {
      id:this.tasks.length +1,
      name:this.newTaskName,
      completed:false
    }
    this.tasks.push(newTask);

    this.newTaskName ='';
  }
  onToggleTaskCompletion(task: Task)
  {
    for(let i=0;i<this.tasks.length;i++)
    {
      if(this.tasks[i].id === task.id) 
        {
           task.completed =  !task.completed;
           break;
        } 
    }
   
    console.log("Updated Task: "+ task);
  }
  onTaskDelete(id: number)
  {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}
