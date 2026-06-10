import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Student } from './Components/student/student';
import { Admin } from './Components/admin/admin';
import { Profile } from './Components/profile/profile';
import { Reports } from './Components/reports/reports';
import { Settings } from './Components/settings/settings';

export const routes: Routes = [
    //define routes here
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    //home route
    {path:'home', component: Home},
    //parameter route (dynamic values -student id)
    {path:'student/:id', component: Student},
    //admin route with child pages
    {path:'admin', component: Admin, children: [
        {path:'profile', component: Profile},
        {path:'report', component: Reports},
        {path:'settings',component:Settings}
    ]},
    //wildcard routes
    {path:'**', redirectTo: 'home' }
];
