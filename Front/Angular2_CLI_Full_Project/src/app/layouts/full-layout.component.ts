import { Component, OnInit } from '@angular/core';

import { MyServiceService } from '../my-service.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent {
    
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
  constructor(private myService:MyServiceService) {

  }
  public onSubmit(name: string) {
    this.myService.sendData({ name: name})
      .subscribe(
        data => console.log(data)
      );
  }
 
}
