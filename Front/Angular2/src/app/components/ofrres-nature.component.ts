import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { MyServiceService } from '../my-service.service'

@Component({
  selector: 'app-ofrres-nature',
  templateUrl: './ofrres-nature.component.html'
})
export class OfrresNatureComponent implements OnInit {
  private subscription: Subscription;
  private offreIndex: string;
  items: any;
  check: boolean =false ;
  object: Object = {}
  
  constructor(private route: ActivatedRoute, private myService: MyServiceService, private router: Router) { }

  offreProfile(id: number){
    this.router.navigate(['/components/OffreDetail/', id]);
  } 

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.offreIndex = params['nature'];
      this.myService.getOffreByNature(this.offreIndex)
      .subscribe(
        data => {
          const myArray = [];
            for (let key in data) {
                myArray.push(data[key]);
            }
            this. check = true;
            this.items = myArray;
          }
      );
   });
  }

}
