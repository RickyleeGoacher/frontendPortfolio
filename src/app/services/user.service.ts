import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

	apiURL: string = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient, private router: Router) { }

	register(body:any){

  		let headers = new HttpHeaders({
  	  		'Content-Type': 'application/json'
  		});

  		let options = {
  			headers: headers
  		}
    	return this.httpClient.post<any>(`${this.apiURL}/users/register`, body, options);
  	}

  	login(body:any){
    	return this.httpClient.post<any>(`${this.apiURL}/users/login`,body,{
    	observe:'body',
      	headers:new HttpHeaders().append('Content-Type','application/json')
    	});
	}


	logout(){
    	return this.httpClient.get(`${this.apiURL}/users/logout`,{
    	observe:'body',
    	headers:new HttpHeaders().append('Content-Type','application/json')
    	})
  	}

	get loggedIn(): boolean {
    	return !!sessionStorage.getItem('token');
  	}

	getToken(): any {
    	return sessionStorage.getItem('token');
  	}
}
