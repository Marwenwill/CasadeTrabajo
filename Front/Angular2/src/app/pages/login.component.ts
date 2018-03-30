import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'login.component.html',
  
})
export class LoginComponent  implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMessage = '';

    constructor(private myService:MyServiceService, private fb: FormBuilder, private router: Router) {}

    onSignin(username: String, password: String) {
      this.myService.login({username: username, password: password})
      .subscribe(
        data => this.router.navigate(['dashboard'])
      );
    }

    ngOnInit():any {
        this.myForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}
