import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
 
  title = 'login';
  sideBarOpen=true;
  ngInit(){
    
  }
  sideBarToggler(){
    this.sideBarOpen= !this.sideBarOpen;
  }

}

