import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MyServiceService } from 'app/my-service.service';

@Component({
  selector: 'app-offre-niveau',
  templateUrl: './offre-niveau.component.html',
  styles: []
})
export class OffreNiveauComponent implements OnInit {
  private subscription: Subscription;
  private toFind: string;
  items : any[] = [];
  check: boolean =false ;

  constructor(private route: ActivatedRoute, private myService: MyServiceService, private router: Router) { }

  offreProfile(id: number){
    this.router.navigate(['/components/OffreDetail/', id]);
  } 
  
  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.toFind = params['niveau'];
      this.myService.getOffreByNiveau(this.toFind)
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data) {
              myArray.push(data[key]);
          }
          this.items = myArray;
          this.check = true;
          }
      );
   });
  }
}
