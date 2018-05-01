import { Component, OnInit } from '@angular/core';

import { Response } from '@angular/http';

import { MyServiceService } from '../my-service.service'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Console } from '@angular/core/src/console';
import { error } from 'selenium-webdriver';


@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit{
  isLoggedIn: boolean = false;
  items: any[] = [];
  itemsNature: any[] = [];
  itemsDuree: any[] = [];
  itemsEmplacement: any[] = [];
  itemsEntreprise: any[] = [];
  itemsNiveau: any[] = [];
  name: string = "";
  email : string = ""
  check: boolean =false ;

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
  datet:string;
  id: number = 1;

  constructor(private myService: MyServiceService, private fb: FormBuilder, private router: Router) { 
    this.datet = 'Angular2'

    let dp = new DatePipe('de-DE' /* locale .. */);
    this.datet = dp.transform(new Date(), 'yyyy-MM-dd');
    console.log(this.datet);
  }


  public onSubmit(title: string, nature: String, duree: String, niveau: String, description: String, salaire: String,  secteur: String) {
    console.log(title, nature, duree, this.datet, this.id, description)
    if (this.isLoggedIn){
      console.log('logged in')
    }
    else{
      console.log("Not logged in")
    }

    this.myService.sendDataOffres({ owner:1, title: title, datet: this.datet, nature: nature, duree: duree, niveau: niveau, description: description, salaire: salaire, secteur:secteur, id:6})
      .subscribe(
        data => console.log(data)
      );
  }

  search(toFind: string){
    this.router.navigate(['/components/search', toFind])
  }

  selectByDuree(duree: string){
    this.router.navigate(['/components/duree', duree])
  }

  selectBySecteur(secteur: string){
    this.router.navigate(['/components/secteurs', secteur])
    }

  selectOffresById(){
    console.log(this.myService.userid)
    this.router.navigate(['/components/mesoffres', 1])
    }  

  selectByTypeEmploi(nature: string){
    this.router.navigate(['/components/natures', nature])
    }  
  
    selectByNiveau(niveau: string){
      this.router.navigate(['/components/niveau', niveau])
      }   

  selectByEmplacement(emplacement: string){
    this.router.navigate(['/components/emplacements', emplacement])
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
   this.isLoggedIn = true;
   this.name =  currUser.username
   this.email = this.myService.email
  
  }

  this.myService.getRecruteurById(1)
    .subscribe(
      data => {
        this.itemsEntreprise = data;
        this. check = true;
      }
    );

    this.myService.getAllSecteurs()
    .subscribe(
      data => {
        const myArray = [];
        for (let key in data) {
            myArray.push(data[key]);
        }
        this.items = myArray;
      },
      (error) => {console.log("Hello " + error);}
    );


    this.myService.getAllNature()
    .subscribe(
      data => {
        const myArray = [];
        for (let key in data) {
            myArray.push(data[key]);
        }
        this.itemsNature = myArray;
      } ,
      (error) => {console.log("Hello " + error);}
    );
  
    this.myService.getAllDuree()
    .subscribe(
      data => {
        const myArray = [];
        for (let key in data) {
            myArray.push(data[key]);
        }
        this.itemsDuree = myArray;
      } 
    );

    this.myService.getAllEmplacements()
    .subscribe(
      data => {
        this.itemsEmplacement = data;
        this. check = true;
      },
      (error) => {console.log("Hello " + error);} 
    );  

    this.myService.getAllNiveau()
    .subscribe(
      data => {
        this.itemsNiveau = data;
        this. check = true;
      },
      (error) => {console.log(error);} 
    ); 
  
}
  public logout() {
    this.myService.logout();
    this.router.navigate(['/dashboard']);//pages/login
  }
}
