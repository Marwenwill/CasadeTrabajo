import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgForm } from '@angular/forms';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'login.component.html',
  
})
export class LoginComponent  implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMessage = '';
    user:{username?: String, password?: String} = {};
    constructor(private myService:MyServiceService, private fb: FormBuilder, private router: Router) {}

    onSignin(form: NgForm) {
      //console.log(this.user.username);
      this.myService.login({username: this.user.username, password: this.user.password})
      .subscribe(
        data =>  {
          console.log(data)
          this.router.navigate(['dashboard'])}
      );
    }

    ngOnInit():any {
        this.myForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}
