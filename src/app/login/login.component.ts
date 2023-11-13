/*import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formBuilder: any;
  form(form: any) {
    throw new Error('Method not implemented.');
  }
  footer(footer: any) {
    throw new Error('Method not implemented.');
  }
  content(content: any) {
    throw new Error('Method not implemented.');
  }
  header(header: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nameInput: ['', Validators.required],
      
    });
  }

}*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // TODO: Login logic
      console.log('Logged in!');
      this.router.navigate(['/dashboard']);
    } else {
      console.error('Invalid login credentials');
    }
  }
}
