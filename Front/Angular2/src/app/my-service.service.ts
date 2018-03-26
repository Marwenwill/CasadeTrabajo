import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class MyServiceService {
  url:string;
  
	constructor(public http:Http) {
		this.url = "http://127.0.0.1:8000/scrumboard";
	}

    public getAll(): any {
        
        return this.http.get(this.url+"/Recruteurs/")
          .map((data: Response) => data.json());
    }

    public sendData(user: any){
      const body = JSON.stringify(user);
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.url+"/Candidats/", body, {
        headers: headers
      })
        .map((data: Response) => data.json())

    }
}
