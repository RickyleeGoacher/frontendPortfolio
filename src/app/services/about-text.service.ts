import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AboutText } from '../models/about-text.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutTextService {

  private env = environment;

  constructor(private httpClient: HttpClient, private router: Router) { }

	getAbout():Observable<AboutText[]> {
		return this.httpClient.get<AboutText[]>(`${this.env.apiUrl}/about-text`);
	}

    addAbout(text) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      let options = {
        headers: headers
       }
      const about = {
        text: text
      };
      return this.httpClient.post(`${this.env.apiUrl}/about-text/create`, about, options)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      });
    }

  	getAboutById(id):Observable<AboutText[]> {
  		return this.httpClient.get<AboutText[]>(`${this.env.apiUrl}/about-text/update/${id}`);
  	}

  	updateAbout(id, text) {
        let headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
        let options = {
          headers: headers
        }
  		  const about = {
  			  text: text
  		  };
  		  return this.httpClient.post(`${this.env.apiUrl}/about-text/update/${id}`, about, options).subscribe(data => {
        this.router.navigate(['/']);
        })
	}
}
