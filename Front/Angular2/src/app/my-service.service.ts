import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class MyServiceService {
  url:string;
  domain:string;
  token: string;
  userid: string;
  email: string;
  options:{headers:Headers} = {headers : null};
  
  

	constructor(public http:Http) {
    this.domain = "http://127.0.0.1:8000"
    this.url = this.domain+"/scrumboard";
    this.options = new RequestOptions({ headers: new Headers() });
    this.options.headers = new Headers({ 
      'Content-Type': 'application/json'
     });
    this.setAuth();
	}

  public getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2)
      return parts.pop().split(";").shift();
  }

  public PutOffres(user: any): any {
    const body = JSON.stringify(user);
    console.log("okay")
    return this.http.put(this.url+"/Offres/1/", body, new RequestOptions({ headers: new Headers({ 
      'Content-Type': 'application/json', 
      'X-CSRFToken': this.getCookie('csrftoken')
     }) }))
    .map((data: Response) => {console.log(data)})
  }
  
  public PutCandidatProfile(candidat: any): any {
    const body = JSON.stringify(candidat);
    console.log("okay "+this.userid)
    return this.http.put(this.url+"/Candidats/"+this.userid+"/", body, new RequestOptions({ headers: new Headers({ 
      'Content-Type': 'application/json', 
      'X-CSRFToken': this.getCookie('csrftoken')
     }) }))
    .map((data: Response) => {console.log(data)})
  }
  
  
    public getAll(): any {
        return this.http.get(this.url+"/Recruteurs/",this.options)
          .map((data: Response) => data.json());
    }

    public getAllOffres(): any {
      return this.http.get(this.url+"/Offres/",this.options)
        .map((data: Response) => data.json());
  }

  public getAllSecteurs(): any {
    return this.http.get(this.url+"/Secteurs/",this.options)
      .map((data: Response) => data.json());
}

public getAllNature(): any {
  return this.http.get(this.url+"/Nature/",this.options)
    .map((data: Response) => data.json());
}

public getAllNiveau(): any {
  return this.http.get(this.url+"/Niveau/",this.options)
    .map((data: Response) => data.json());
}

public getAllDuree(): any {
  return this.http.get(this.url+"/Duree/",this.options)
    .map((data: Response) => data.json());
}


public getAllVille(): any {
  return this.http.get(this.url+"/Ville/",this.options)
    .map((data: Response) => data.json());
}

public getAllEmplacements(): any {
  return this.http.get(this.url+"/Emplacement/",this.options)
    .map((data: Response) => data.json());
}
public getOffreById(id: number): any{
  console.log("Pre service ")
  return this.http.get(this.url+"/OffresByRecruteur/"+id+"/", this.options)
  .map((data: Response) => data.json()
);
}

public offreById(id: number): any{
  console.log("asba")
  return this.http.get(this.url+"/Offres/"+id+"/", this.options)
    .map((data: Response) => data.json());
}


public getOffreBySecteur(secteur: string): any{
  console.log(this.url+"/OffresBySecteur/"+secteur);
  return this.http.get(this.url+"/OffresBySecteur/"+secteur,this.options)
    .map((data: Response) => data.json());
}
   
public getOffreByNature(nature: string): any{
  return this.http.get(this.url+"/OffresByNature/"+nature,this.options)
    .map((data: Response) => data.json());
}

public getOffreByDuree(duree: string): any{
  return this.http.get(this.url+"/OffresByDuree/"+duree,this.options)
    .map((data: Response) => data.json());
}

public getOffreByNiveau(niveau: string): any{
  return this.http.get(this.url+"/OffresByNiveau/"+niveau,this.options)
    .map((data: Response) => data.json());
}

public getEntrepriseByLocation(emplacement: string): any{
  return this.http.get(this.url+"/EntrepriseByLocation/"+emplacement,this.options)
    .map((data: Response) => data.json());
}

public getRecruteurById(id : Number): any {
  return this.http.get(this.url+"/Recruteurs/"+id,this.options)
    .map((data: Response) => data.json());
}

public getCandidatById(): any {
  console.log("this is userid "+ this.userid)
  return this.http.get(this.url+"/Candidats/"+this.userid+"/",this.options)
    .map((data: Response) => data.json());
}

public sendDataCandidat(user: any){
  const body = JSON.stringify(user);
    return this.http.post(this.url+"/Candidats/", body, new RequestOptions({ headers: new Headers({ 
      'Content-Type': 'application/json', 
      'X-CSRFToken': this.getCookie('csrftoken')
     }) }))
    .map((data: Response) => data.json())
   
  }

  public addCandidature(candidatures: any){
    console.log("Pre Service")
    const body = JSON.stringify(candidatures);
      return this.http.post(this.url+"/Candidatures/", body, new RequestOptions({ headers: new Headers({ 
        'Content-Type': 'application/json', 
        'X-CSRFToken': this.getCookie('csrftoken')
       }) }))
      .map((data: Response) =>console.log(data))    
    }

  private setToken(token) { 
    this.token = token;
    localStorage.setItem('myapps_authtoken', token);
  }

  private setUser(userid, email) { 
    this.userid = userid;
    this.email = email;
    localStorage.setItem('userid', userid);
    localStorage.setItem('email', email);
  }


  private setAuth() {
    this.token = localStorage.getItem('myapps_authtoken');
    this.userid = localStorage.getItem('userid');
    this.email = localStorage.getItem('email');
    if(this.token != null) 
      this.options.headers.append('Authorization', "JWT "+localStorage.getItem('myapps_authtoken'));
    else
      this.options.headers.delete('Authorization');
}

public getCountById(id: number){
    
    return this.http.get(this.url+"/OffresparEntreprise/count/"+ id,this.options)
      .map((data: Response) => data.json())

    }

public search(toFind: string){
  return this.http.get(this.url+"/Search/"+ toFind,this.options)
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

    public countCandidats(){
      return this.http.get(this.url+"/CountC/",this.options)
          .map((data: Response) => data.json())
    }

    public countRecruteurs(){
      return this.http.get(this.url+"/CountR/",this.options)
          .map((data: Response) => data.json())
    }

    public countOffres(){
      return this.http.get(this.url+"/CountO/",this.options)
          .map((data: Response) => data.json())
    }
    
    public login(user: any){
      const body = JSON.stringify(user);
      
      return this.http.post(this.domain+'/api-token-auth/', body, new RequestOptions({ headers: new Headers({ 
        'Content-Type': 'application/json', 
        'X-CSRFToken': this.getCookie('csrftoken')
       }) }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                let user = response.json().userid;
                let email = response.json().email;
                if (token) {
                    // set token property
                    this.setToken(token);
                    this.setUser(user, email);
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
 localStorage.removeItem('myapps_authtoken');
 localStorage.removeItem('userid');
 localStorage.removeItem('email');
 this.setAuth();
}

public isLoggedIn () {
  return (this.token != null);
}



}


