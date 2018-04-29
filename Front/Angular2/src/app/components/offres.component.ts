import { Component, OnInit } from '@angular/core';

import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html'
})
export class OffresComponent implements OnInit {

  items: any[] = [];
  x: string;
  constructor(private myService:MyServiceService, private router: Router) {

  }

  offreProfile(id: number){
    this.router.navigate(['/components/OffreDetail/', id]);
  } 

  ngOnInit() {
    this.x = 'hello';
    this.myService.getAllOffres()
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data) {
              myArray.push(data[key]);
              console.log(data[key]);
          }
          this.items = myArray;
        }
      );
      
  }

}
