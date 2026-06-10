import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { InstructorsComponent } from './Components/instructors/instructors.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HelpComponent } from './Components/help/help.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'courses', component: CoursesComponent},
    {path:'instructors', component: InstructorsComponent},
    {path:'contact', component: ContactComponent},
    {path:'help', component: HelpComponent},
    {path: '**', redirectTo: 'home' }
];
