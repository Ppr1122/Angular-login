import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { ClassesComponent } from './classes/classes.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {path: '',redirectTo:'dashboard',pathMatch:'full',
children:[
    {path:'home',canActivate:[AuthGuard], component:HomeComponent},
    {path:'Students',component:StudentsComponent},
    {path:'logout',component:LogoutComponent},
    {path:'classes',component:ClassesComponent}
],
},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
