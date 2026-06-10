import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user-service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  users: any[] = [];

  newUser = {
    name:'',
    email:''
  };

  constructor(
    private userService: UserService,
    private cd: ChangeDetectorRef
  ) {}

  isEditing=false;

  editId: number | null = null;

  ngOnInit():void{
    this.loadUsers();
  }

  loadUsers(): void{
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      this.cd.markForCheck();
    });
  }

  saveUser(form: any): void {

    if(form.invalid) return;

    if(this.isEditing && this.editId !== null){
      this.userService.updateUser(this.editId, this.newUser).subscribe(() => {
        this.loadUsers();
        this.resetForm(form);
      });
    }

    else{
      this.userService.addUser(this.newUser).subscribe(() => {
        this.loadUsers();
        this.resetForm(form);
      });
    }
  }
    resetForm(form: any) : void{
      this.newUser = {
        name:'',
        email:''
      };
      this.isEditing = false;
      this.editId = null;
      form.resetForm();
    }
  }

