import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from 'app/my-service.service';
import { DatePipe } from '@angular/common';

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
  datet: string;

  constructor(private route: ActivatedRoute, private myService: MyServiceService, private router: Router) {
    this.datet = 'Angular2'

    let dp = new DatePipe('de-DE' /* locale .. */);
    this.datet = dp.transform(new Date(), 'yyyy-MM-dd');
    console.log(this.datet);
   }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.offreIndex = params['id'];
      this.myService.offreById(this.offreIndex)
      .subscribe(
        data => {
          this.items = data;
          this.check = true;
          }
      );
   });
  }

  okay(){
    console.log("Okay")
  }
  offreEntreprise(id: number){
    this.router.navigate(['/components/offres/', id]);
  }


  postCandidature(idRecruteur: number, idOffre: number){
    console.log("Pre component")
    this.myService.addCandidature({dateAjout:this.datet, score:300, idCandidat:1, idOffre: 1})
    .subscribe(
      data => console.log(data)
    );
  }

}
