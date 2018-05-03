import { Component, OnInit } from '@angular/core';

import { MyServiceService } from '../my-service.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMessage = '';
  constructor(private myService:MyServiceService, private fb: FormBuilder, private router: Router) {

  }
  public onSubmit(username: string, email: string, tel: string, password: string, civility: string, birthDate: Date, gouvernorate: string, cv:string) {
    console.log(cv)
    this.myService.sendDataCandidat({ username: username, email: email, tel: tel, password: password, civility: civility, birthDate: birthDate, gouvernorate: gouvernorate, cv:cv})
      .subscribe(
        data => this.router.navigate(['/pages/login']),
        (error) => {console.log("lele"+error)}
      );
  }

  onSignup() {

  }

  ngOnInit(): any {
      this.myForm = this.fb.group({
          username: ['', Validators.required],
          tel: ['', Validators.required],
          email: ['', Validators.compose([
              Validators.required,
              this.isEmail
          ])],
          password: ['', Validators.required],
          confirmation: ['', Validators.compose([
              Validators.required,
              this.isEqualPassword.bind(this)
          ])],
          birthDate: ['', Validators.required],
          gouvernorate: ['', Validators.required],
      });
  }

  isEmail(control: FormControl): {[s: string]: boolean} {
      if (!control.value.match(/^[a-zA-Z_.-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
          return {noEmail: true};
      }
  }

  isEqualPassword(control: FormControl): {[s: string]: boolean} {
      if (!this.myForm) {
          return {passwordsNotMatch: true};

      }
      if (control.value !== this.myForm.controls['password'].value) {
          return {passwordsNotMatch: true};
      }
  }
}
