import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MyServiceService } from '../my-service.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-entreprise-profile',
  templateUrl: './entreprise-profile.component.html',
  styles: []
})
export class EntrepriseProfileComponent implements OnInit {
  private subscription: Subscription;
  private offreIndex: number;
  items : any[] = [];
  check: boolean =false ;

  constructor(private route: ActivatedRoute, private myService: MyServiceService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.offreIndex = params['id'];
      this.myService.getRecruteurById(this.offreIndex)
      .subscribe(
        data => {
          this.items = data;
          this. check = true;
          }
      );
   });
  }

  offreEntreprise(){
    this.subscription = this.route.params.subscribe((params: any) => {
    this.offreIndex = params['id'];
    this.router.navigate(['/components/offres/', this.offreIndex]);
    });
  }

}
