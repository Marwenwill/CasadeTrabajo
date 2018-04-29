import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from 'app/my-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  private subscription: Subscription;
  private toFind: string;
  items : any[] = [];
  check: boolean =false ;

  constructor(private route: ActivatedRoute, private myService: MyServiceService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.toFind = params['toFind'];
      this.myService.search(this.toFind)
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data) {
              myArray.push(data[key]);
              console.log(data[key]);
          }
          this.items = myArray;
          this.check = true;
          }
      );
   });
  }
}
