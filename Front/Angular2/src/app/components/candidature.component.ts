import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'app/my-service.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styles: []
})
export class CandidatureComponent implements OnInit {
  private subscription: Subscription;
  items: any[] = []
  private offreIndex: number;
  constructor(private route: ActivatedRoute, private myService: MyServiceService) { }

  sendEmail(email: string, object: string, description: string, id:number){
    this.myService.sendEmail(email, object, description, id)
    .subscribe(
      data => {
        const myArray = [];
        for (let key in data) {
            myArray.push(data[key]);
            console.log(data)
        }
        this.items = myArray;
        }
    );
  } 

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
    this.offreIndex = params['id'];
    this.myService.getCandidatureById(this.offreIndex) //parseInt(this.myService.userid)
        .subscribe(
          data => {
            const myArray = [];
            for (let key in data) {
                myArray.push(data[key]);
                console.log(data)
            }
            this.items = myArray;
            }
        );
  });
  }
}
