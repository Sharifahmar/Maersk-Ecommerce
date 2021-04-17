import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      'password': new FormControl("", [Validators.required])
    });
  }


  login(): void {
    this.loginService.getToken(this.loginForm.value).subscribe(resp => {
      sessionStorage.setItem('token', resp.token);
      this.router.navigate(['/products']);
    },
      error => {
        alert('Something went wrong !!')
      }

    );
  }

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }
}
