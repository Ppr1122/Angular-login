import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  Logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
