import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './dashboard/students/students.component';
import { ClassesComponent } from './dashboard/classes/classes.component';
import { LogoutComponent } from './dashboard/logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { CanActivate } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],
children:[
  {path:'dashboard/logout',component:LogoutComponent},
  {path:'dashboard/Classes',component:ClassesComponent},
  {path:'dashboard/home',component:HomeComponent},
  {path:'dashboard/Students',component:StudentsComponent},
]},
  {path:'signup',component:SignupComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  routingCamponents =[HomeComponent,LogoutComponent,ClassesComponent,StudentsComponent]
