import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { Subscription } from 'rxjs/Subscription';

import { MyServiceService } from '../my-service.service'

@Component({
  selector: 'app-offres-entreprise',
  templateUrl: './offres-entreprise.component.html'
})
export class OffresEntrepriseComponent implements OnInit {
  private subscription: Subscription;
  private offreIndex: number;
  items: any;
  check: boolean =false ;

  constructor(private route: ActivatedRoute, private myService: MyServiceService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
        this.offreIndex = params['id'];
        this.myService.getOffreById(this.offreIndex)
        .subscribe(
          data => {
                this.items = data;
                this. check = true;
                console.log(this.items)
            }
        );
     });
    }
    

}
