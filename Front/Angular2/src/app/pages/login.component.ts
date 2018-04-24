import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgForm } from '@angular/forms';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';
import { error } from 'util';

@Component({
  templateUrl: 'login.component.html',
  
})
export class LoginComponent  implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMsg = '';

    
    user:{username?: String, password?: String} = {};
    constructor(private myService:MyServiceService, private fb: FormBuilder, private router: Router) {}

    onSignin(form: NgForm) {
      //console.log(this.user.username);
      this.myService.login({username: this.user.username, password: this.user.password})
      .subscribe(
        data =>  {
          console.log(data)
          this.router.navigate(['dashboard'])},
          (error) => {this.errorMsg = 'Failed to login';}
      );
    }

    ngOnInit():any {
        this.myForm = this.fb.group({
            username: ['', Validators.compose([
                Validators.required
            ])],
            password: ['', Validators.compose([
                Validators.required
            ])],
        });
    }
}
