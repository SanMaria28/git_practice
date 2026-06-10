import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Login } from './Components/login/login';
import { Signup } from './Components/signup/signup';
import { About } from './Components/about/about';
import { Products } from './Components/products/products';
import { Admin } from './Components/admin/admin';
import { Profile } from './Components/profile/profile';
import { Orders } from './Components/orders/orders';
import { Settings } from './Components/settings/settings';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component: Home},
    {path:'about', component: About},
    {path:'products/:id', component:Products},
    {path:'admin', component:Admin, children:[
        {path:'profile',component:Profile},
        {path:'orders',component:Orders},
        {path:'settings', component:Settings},
    ]},
    {path:'login',component:Login},
    {path:'signup',component:Signup},
    {path:'**', redirectTo:'home' },
];
