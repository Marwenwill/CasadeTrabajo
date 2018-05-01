import { Component, OnInit } from '@angular/core';

import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-recruteur',
  templateUrl: './recruteur.component.html'
})
export class RecruteurComponent {

  constructor(private myService:MyServiceService) {

  }
  public onSubmit(username: string, email: String, tel: String, password: String, entrepriseName: String, webSite: Date, emplacement: String, logo: String, description: String, nbEmployee: number) {
    this.myService.sendDataRecruteur({ username: username, email: email, tel: tel, password: password, entrepriseName: entrepriseName, webSite: webSite, emplacement: emplacement, logo: logo, description: description, nbEmployee: nbEmployee})
      .subscribe(
        data => console.log(data)
      );
  }

}