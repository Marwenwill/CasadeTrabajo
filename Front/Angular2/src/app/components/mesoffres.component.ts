import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MyServiceService } from '../my-service.service'
import { Subscription } from 'rxjs';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Console } from '@angular/core/src/console';
@Component({
  selector: 'app-mesoffres',
  templateUrl: './mesoffres.component.html',
  styles: []
})
export class MesoffresComponent implements OnInit {
  private subscription: Subscription;
  private offreIndex: number;
  items : any[] = [];
  saveSuccess: boolean =false ;
  
  constructor(private route: ActivatedRoute, private myService: MyServiceService, private router: Router) {
    route.params.subscribe(val => {
      console.log("Pre component")
        this.myService.getOffreById(1) //parseInt(this.myService.userid)
        .subscribe(
          data => {
            const myArray = [];
            for (let key in data) {
                myArray.push(data[key]);
                console.log("Post component")
            }
            
            this.items = myArray;
            }
        );
    });
   }

  ngOnInit() {

    this.subscription = this.route.params.subscribe((params: any) => {
      console.log("Pre component")
        this.myService.getOffreById(1) //parseInt(this.myService.userid)
        .subscribe(
          data => {
            const myArray = [];
            for (let key in data) {
                myArray.push(data[key]);
                console.log("Post component")
            }
            this.items = myArray;
            }
        );
     });
    }


    public onSubmit(title: string, nature: String, duree: String, niveau: String, description: String, salaire: String,  secteur: String) {
      console.log(title, nature, duree, niveau, description, salaire, secteur)
  
      this.myService.PutOffres({id:1, title: title, nature: nature, duree: duree, niveau: niveau, description: description, salaire: salaire, secteur:secteur})
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
                //this.items = data;
                //this. check = true;

}
