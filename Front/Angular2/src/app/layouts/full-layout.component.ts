import { Component, OnInit } from '@angular/core';

import { Response } from '@angular/http';

import { MyServiceService } from '../my-service.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit{
  
  items: any[] = [];
  itemsNature: any[] = [];
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

  constructor(private myService: MyServiceService) { }
  ngOnInit(){
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
}
