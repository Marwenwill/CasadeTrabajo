import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class MyServiceService {
  url:string;
  token: string;
  
	constructor(public http:Http) {
		this.url = "http://127.0.0.1:8000/scrumboard";
	}

    public getAll(): any {
        return this.http.get(this.url+"/Recruteurs/")
          .map((data: Response) => data.json());
    }

    public getAllOffres(): any {
      return this.http.get(this.url+"/Offres/")
        .map((data: Response) => data.json());
  }

  public getAllSecteurs(): any {
    return this.http.get(this.url+"/Secteurs/")
      .map((data: Response) => data.json());
}

public getAllNature(): any {
  return this.http.get(this.url+"/Nature/")
    .map((data: Response) => data.json());
}
    public getOffreById(id: number): any{
      return this.http.get(this.url+"/Offres/"+id)
          .map((data: Response) => data.json());
    }
    
    public sendDataCandidat(user: any){
      const body = JSON.stringify(user);
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.url+"/Candidats/", body, {
        headers: headers
      })
        .map((data: Response) => data.json())

    }

    public getCountById(id: number){
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.get(this.url+"/OffresparEntreprise/count/"+ id)
        .map((data: Response) => data.json())

    }

    public sendDataRecruteur(user: any){
      const body = JSON.stringify(user);
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.url+"/Recruteurs/", body, {
        headers: headers
      })
        .map((data: Response) => data.json())

    }


    public sendDataOffres(user: any){
      const body = JSON.stringify(user);
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.url+"/Offres/", body, {
        headers: headers
      })
        .map((data: Response) => data.json())

    }
    
    public login(user: any){
      const body = JSON.stringify(user);
      let headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      });
      
      return this.http.post('/api-token-auth/', body, {
        headers: headers
      })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;
 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', body);
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    
}
}


