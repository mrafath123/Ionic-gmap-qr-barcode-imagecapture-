import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
  standalone:false,
})
export class SigninPage {
  userId: string='';
  Password: string='';

  constructor(private router: Router) {}

  login() {
    localStorage.setItem('userId', this.userId);
    localStorage.setItem('Password', this.Password);
    this.router.navigate(['/dashboard']);
  }
}
