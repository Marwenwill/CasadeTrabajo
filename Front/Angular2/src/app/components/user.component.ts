import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'app/my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {
  items : any[] = [];
  check: boolean =false ;
  saveSuccess: boolean =false ;

  constructor(private myService: MyServiceService, private router: Router) { }

  ngOnInit() {
    this.myService.getCandidatById()
      .subscribe(
        data => {
          console.log(data)
          this.items = data;
          this.check = true;
          }
      );
  }

  public postProfile(username: string, email: string, tel: string, civility: string, birthDate: string, gouvernorate: string,  cvTxt: string, password: string, cv: string) {
    //console.log(title, nature, duree, niveau, description, salaire, secteur)
    console.log("Hello "+username, email, tel, cvTxt)
    this.myService.PutCandidatProfile({id:this.myService.userid, username: username, email: email, tel: tel, password:password, civility: civility, birthDate: birthDate, gouvernorate: gouvernorate, cv:cv, cvTxt:cvTxt })
      .subscribe(
        data => {
          console.log("sibon")
          this.ngOnInit();
        }
      );
  }

}
