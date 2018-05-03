import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'app/my-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {
  items : any[] = [];
  check: boolean =false ;
  saveSuccess: boolean =false ;

  constructor(private myService: MyServiceService) { }

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

  public postProfile(username: string, email: String, tel: String, civility: String, birthDate: String, gouvernorate: String,  cvTxt: String) {
    //console.log(title, nature, duree, niveau, description, salaire, secteur)

    this.myService.PutCandidatProfile({id:this.myService.userid, username: username, email: email, tel: tel, civility: civility, birthDate: birthDate, gouvernorate: gouvernorate, cvTxt:cvTxt})
      .subscribe(
        data => {
          this.ngOnInit()
          this. saveSuccess = true;
          setInterval(() => {
            this.saveSuccess = false
            this.ngOnInit()
        }, 4000);
        }
      );
  }

}
