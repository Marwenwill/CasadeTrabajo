import { Component } from '@angular/core';

import { MyServiceService } from '../my-service.service';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  constructor(private myService:MyServiceService) {

  }
  public onSubmit(name: string, lastName: String, email: String, tel: String, password: String, civility: String, birthDate: Date, gouvernorate: String) {
    this.myService.sendData({ name: name, lastName: lastName, email: email, tel: tel, password: password, civility: civility, birthDate: birthDate, gouvernorate: gouvernorate})
      .subscribe(
        data => console.log(data)
      );
  }

}
