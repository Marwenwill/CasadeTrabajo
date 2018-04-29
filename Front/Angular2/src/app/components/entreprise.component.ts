import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html'
})
export class EntrepriseComponent implements OnInit {

  items: any[] = [];
  constructor(private myService:MyServiceService, private router: Router) {

  }

  entrepriseProfile(id: number){
    this.router.navigate(['/components/EntrepriseProfile', id])
    }

  ngOnInit() {
    this.myService.getAll()
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data) {
              myArray.push(data[key]);
          }
          this.items = myArray;
        }
      );
  }

}
