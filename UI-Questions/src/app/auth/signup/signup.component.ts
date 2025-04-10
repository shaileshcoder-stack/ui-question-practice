import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  message = '';
  constructor( private fb: FormBuilder,  private authService: AuthService,  private router: Router) { 
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      usermail: ['', [Validators.required, Validators.email]],
      usercontact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      role: ['User', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    if (this.signupForm.invalid) return;

    this.authService.signup(this.signupForm.value).subscribe({
      next: () => this.message = 'Signup successful!',
      error: (err) => this.message = err.message
    });
  }
}
