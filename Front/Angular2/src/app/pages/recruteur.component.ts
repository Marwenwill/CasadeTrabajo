import { Component, OnInit } from '@angular/core';

import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-recruteur',
  templateUrl: './recruteur.component.html'
})
export class RecruteurComponent {

  constructor(private myService:MyServiceService) {

  }
  public onSubmit(name: string, lastName: String, email: String, tel: String, password: String, entrepriseName: String, webSite: Date, emplacement: String, logo: String, description: String, secteur: String, nbEmployee: number) {
    this.myService.sendDataRecruteur({ name: name, lastName: lastName, email: email, tel: tel, password: password, entrepriseName: entrepriseName, webSite: webSite, emplacement: emplacement, logo: logo, description: description, secteur: secteur, nbEmployee: nbEmployee})
      .subscribe(
        data => console.log(data)
      );
  }

}