import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { Subscription } from 'rxjs/Subscription';

import { MyServiceService } from '../my-service.service'
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-offres-entreprise',
  templateUrl: './offres-entreprise.component.html'
})
export class OffresEntrepriseComponent implements OnInit {
  private subscription: Subscription;
  private offreIndex: number;
  items : any[] = [];
  check: boolean =false ;

  constructor(private route: ActivatedRoute, private myService: MyServiceService, private router: Router) { }

  offreProfile(id: number){
    this.router.navigate(['/components/OffreDetail/', id]);
  } 

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
        this.offreIndex = params['id'];
        this.myService.getOffreById(this.offreIndex)
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
                //this.items = data;
                //this. check = true;

}
