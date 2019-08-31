import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

	private env = environment;

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
      	return this.httpClient.post(`${this.env.apiUrl}/contact/send`, messageContent, options)
    }
}
