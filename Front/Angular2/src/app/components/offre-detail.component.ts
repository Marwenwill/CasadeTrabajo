import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from 'app/my-service.service';

@Component({
  selector: 'app-offre-detail',
  templateUrl: './offre-detail.component.html',
  styles: []
})
export class OffreDetailComponent implements OnInit {
  private subscription: Subscription;
  private offreIndex: number;
  items : any[] = [];
  check: boolean =false ;

  constructor(private route: ActivatedRoute, private myService: MyServiceService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.offreIndex = params['id'];
      this.myService.offreById(this.offreIndex)
      .subscribe(
        data => {
          console.log("data is "+data['entrepriseName.entrepriseName'])
          this.items = data;
          this.check = true;
          }
      );
   });
  }

  offreEntreprise(id: number){
    this.router.navigate(['/components/offres/', id]);
  }

}
