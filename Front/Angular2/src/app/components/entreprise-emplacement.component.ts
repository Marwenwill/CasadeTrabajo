import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private myService: MyServiceService, private router: Router) {

  }

  entrepriseProfile(id: number){
    this.router.navigate(['/components/EntrepriseProfile', id])
    }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.offreIndex = params['emplacement'];
      this.myService.getEntrepriseByLocation(this.offreIndex)
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
