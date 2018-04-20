import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { MyServiceService } from '../my-service.service'

@Component({
  selector: 'app-offres-secteurs',
  templateUrl: './offres-secteurs.component.html'
})
export class OffresSecteursComponent implements OnInit {
  private subscription: Subscription;
  private offreIndex: string;
  items: any;
  check: boolean =false ;
  object: Object = {}

  constructor(private route: ActivatedRoute, private myService: MyServiceService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.offreIndex = params['secteur'];
      this.myService.getOffreBySecteur(this.offreIndex)
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
