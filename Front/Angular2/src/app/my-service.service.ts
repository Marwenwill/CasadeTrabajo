import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class MyServiceService {
  url:string;
  domain:string;
  token: string;
  options:{headers:Headers} = {headers : null};
  
	constructor(public http:Http) {
    this.domain = "http://127.0.0.1:8000"
    this.url = this.domain+"/scrumboard";
    this.options.headers = new Headers();
    this.options.headers.append('Content-Type', 'application/json');
    this.setAuth();
	}

    public getAll(): any {
        return this.http.get(this.url+"/Recruteurs/",this.options)
          .map((data: Response) => data.json());
    }

    public getAllOffres(): any {
      return this.http.get(this.url+"/Offres/",this.options)
        .map((data: Response) => data.json());
  }

  // ija facebook okay

  public getAllSecteurs(): any {
    console.log(this.options);
    return this.http.get(this.url+"/Secteurs/",this.options)
      .map((data: Response) => data.json());
}

public getAllNature(): any {
  return this.http.get(this.url+"/Nature/",this.options)
    .map((data: Response) => data.json());
}

public getOffreById(id: number): any{
  return this.http.get(this.url+"/OffresByRecruteur/"+id)
    .map((data: Response) => data.json());
}

public getOffreBySecteur(secteur: string): any{
  return this.http.get(this.url+"/OffresBySecteur/"+secteur,this.options)
    .map((data: Response) => data.json());
}
    
public sendDataCandidat(user: any){
  const body = JSON.stringify(user);
    return this.http.post(this.url+"/Candidats/", body, this.options)
    .map((data: Response) => data.json())
   
  }

  private setToken(token) { 
    this.token = token;
    localStorage.setItem('myapps_authtoken', token);
  }
  private setAuth() {
    console.log(this.token);
    if(this.token != null) 
      this.options.headers.append('Authorization', "JWT "+localStorage.getItem('myapps_authtoken'));
    else
      this.options.headers.delete('Authorization');
}
public getCountById(id: number){
    
    return this.http.get(this.url+"/OffresparEntreprise/count/"+ id,this.options)
      .map((data: Response) => data.json())

    }

    public sendDataRecruteur(user: any){
      const body = JSON.stringify(user);
      return this.http.post(this.url+"/Recruteurs/", body, this.options)
        .map((data: Response) => data.json())

    }


    public sendDataOffres(user: any){
      const body = JSON.stringify(user);
      
      return this.http.post(this.url+"/Offres/", body, this.options)
        .map((data: Response) => data.json())

    }
    
    public login(user: any){
      const body = JSON.stringify(user);
      
      return this.http.post(this.domain+'/api-token-auth/', body, this.options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    

                    this.setToken(token);
                   // console.log(token);
                    this.setAuth();
                   // console.log(this.options.headers)
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



public logout(){
 this.setToken(null);
 localStorage.setItem('currentUser', null);
 this.setAuth();
}

public isLoggedIn () {
  return (this.token != null);
}

}


