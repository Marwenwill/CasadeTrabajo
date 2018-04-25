import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MyServiceService } from '../my-service.service'
import { Subscription } from 'rxjs';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-mesoffres',
  templateUrl: './mesoffres.component.html',
  styles: []
})
export class MesoffresComponent implements OnInit {
  private subscription: Subscription;
  private offreIndex: number;
  items : any[] = [];
  check: boolean =false ;
  
  constructor(private route: ActivatedRoute, private myService: MyServiceService) { }

  ngOnInit() {

    this.subscription = this.route.params.subscribe((params: any) => {

        this.myService.getOffreById(1) //parseInt(this.myService.userid)
        .subscribe(
          data => {
            const myArray = [];
            for (let key in data) {
              console.log(data[key])
                myArray.push(data[key]);
            }
            this. check = true;
            this.items = myArray;
            }
        );
     });
    }


    public onSubmit(title: string, nature: String, duree: String, niveau: String, description: String, salaire: String,  secteur: String) {
      console.log(title, nature, duree+" userID"+ this.myService.userid, description)
  
      this.myService.PutOffres({ title: title, nature: nature, duree: duree, niveau: niveau, description: description, salaire: salaire, secteur:secteur, id:this.myService.userid})
        .subscribe(
          data => console.log(data)
        );
    }
                //this.items = data;
                //this. check = true;
                //console.log(this.items)

}
