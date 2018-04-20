import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { MyServiceService } from '../my-service.service'

@Component({
  selector: 'app-entreprise-emplacement',
  templateUrl: './entreprise-emplacement.component.html'
})
export class EntrepriseEmplacementComponent implements OnInit {
  private subscription: Subscription;
  private offreIndex: string;
  items : any[] = [];
  check: boolean =false ;

  constructor(private route: ActivatedRoute, private myService: MyServiceService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.offreIndex = params['emplacement'];
      this.myService.getEntrepriseByLocation(this.offreIndex)
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

}
