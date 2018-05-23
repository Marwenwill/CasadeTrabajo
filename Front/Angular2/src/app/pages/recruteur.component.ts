import { Component, OnInit } from '@angular/core';

import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-recruteur',
  templateUrl: './recruteur.component.html'
})
export class RecruteurComponent {
  saveSuccess: boolean =false ;
  saveErreur: boolean =false ;
  nbOffre: number = 0;
  constructor(private myService:MyServiceService, private router: Router) {

  }
  public onSubmit(username: string, email: String, tel: String, password: String, entrepriseName: String, webSite: Date, emplacement: String, logo: String, description: String, nbEmployee: number, nbOffre: number) {
    this.myService.sendDataRecruteur({ username: username, email: email, tel: tel, password: password, entrepriseName: entrepriseName, webSite: webSite, emplacement: emplacement, logo: logo, description: description, nbEmployee: nbEmployee, nbOffres: nbOffre})
      .subscribe(
        data => {
            this.saveSuccess = true;
           // this.router.navigate(['/pages/login']);
        },
        (error) => {this. saveErreur = true;
         //this.router.navigate(['/pages/login']);
        }
      );
  }

}