import { Component, OnInit } from '@angular/core';

import { Response } from '@angular/http';

import { MyServiceService } from '../my-service.service'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit{
  isLoggedIn: boolean = false;
  items: any[] = [];
  itemsNature: any[] = [];
  name: string = "";
  public disabled: boolean = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
  myForm: FormGroup;
  error = false;
  errorMessage = '';
  dateAjout:string;
  id: number = 1;

  constructor(private myService: MyServiceService, private fb: FormBuilder, private router: Router) { 
    this.dateAjout = 'Angular2'

    let dp = new DatePipe('de-DE' /* locale .. */);
    this.dateAjout = dp.transform(new Date(), 'yyyy-MM-dd');
    console.log(this.dateAjout);
  }


  public onSubmit(title: string, nature: String, duree: String, niveau: String, description: String, salaire: String,  secteur: String) {
    console.log(title, nature, duree, this.dateAjout, this.id, description)
    this.myService.sendDataOffres({ title: title, dateAjout: this.dateAjout, nature: nature, duree: duree, niveau: niveau, description: description, salaire: salaire, secteur:secteur, id:this.id})
      .subscribe(
        data => console.log(data)
      );
  }

  selectBySecteur(secteur: string){
    this.router.navigate(['/components', secteur])
    }
 
  ngOnInit(): any{
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      nature: ['', Validators.required],
      duree: ['', Validators.required],
      niveau: ['', Validators.required],
      description: ['', Validators.required],
      salaire: ['', Validators.required],
      secteur: ['', Validators.required],
  });
 
let currUser = JSON.parse(localStorage.getItem('currentUser'));
 if (currUser != null) {
    console.log("hello");
   this.isLoggedIn = true; 
   this.name = currUser.username;
  
  }

    this.myService.getAllSecteurs()
    .subscribe(
      data => {
        const myArray = [];
        for (let key in data) {
            myArray.push(data[key]);
            console.log(data[key]);
        }
        this.items = myArray;
      }
    );
    this.myService.getAllNature()
    .subscribe(
      data => {
        const myArray = [];
        for (let key in data) {
            myArray.push(data[key]);
            console.log(data[key]);
        }
        this.itemsNature = myArray;
      } 
    );
  
}
  public logout() {
    this.myService.logout();
    location.reload();
  }
}
