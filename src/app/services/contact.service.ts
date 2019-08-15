import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

	apiURL: string = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient, private router: Router) { }

    sendMessage(name, email, message) {
    	let headers = new HttpHeaders({
        	'Content-Type': 'application/json'
      	});
      	let options = {
        	headers: headers
       	}
      	const messageContent = {
        	name: name,
        	email: email,
        	message: message
      	};
      	return this.httpClient.post(`${this.apiURL}/contact/send`, messageContent, options)
      	.subscribe(data => {
        	console.log(data);
        	this.router.navigate(['/']);
      	});
    }
}
