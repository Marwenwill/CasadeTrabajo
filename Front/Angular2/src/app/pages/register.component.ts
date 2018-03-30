import { Component, OnInit } from '@angular/core';

import { MyServiceService } from '../my-service.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMessage = '';
  constructor(private myService:MyServiceService, private fb: FormBuilder) {

  }
  public onSubmit(name: string, lastName: String, email: String, tel: String, password: String, civility: String, birthDate: Date, gouvernorate: String) {
    this.myService.sendDataCandidat({ name: name, lastName: lastName, email: email, tel: tel, password: password, civility: civility, birthDate: birthDate, gouvernorate: gouvernorate})
      .subscribe(
        data => console.log(data)
      );
  }

  onSignup() {

  }

  ngOnInit(): any {
      this.myForm = this.fb.group({
          name: ['', Validators.required],
          lastName: ['', Validators.required],
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
