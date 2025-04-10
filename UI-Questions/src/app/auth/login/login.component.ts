import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm :FormGroup;
  error = '';

  errorMessage: String ='';
  constructor( private fb: FormBuilder , private authservice: AuthService, private route: Router) { 
    this.loginForm = this.fb.group({
      usercontact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    if (this.loginForm.invalid) return;

    this.authservice.login(this.loginForm.value).subscribe({
      next: () => this.authservice.navigateByRole(),
      error: (err) => this.error = err.message
    });
  }
}
