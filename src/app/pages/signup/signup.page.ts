import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone:false,
})
export class SignupPage implements OnInit {

  constructor(private router: Router) { }
  
  goToSignin() {
    this.router.navigate(['/signin']);
  }

  ngOnInit() {
  }

}
