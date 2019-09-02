import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Experiment } from '../models/experiment.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperimentsService {

  	private env = environment;

	constructor(private httpClient: HttpClient, private router: Router) { }

	getExperiments():Observable<Experiment[]> {
		return this.httpClient.get<Experiment[]>(`${this.env.apiUrl}/experiments`);
	}

    addExperiment(title, description, url, icon, liveUrl, icon2) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      let options = {
        headers: headers
       }
      const experiment = {
        title: title,
        description: description,
        url: url,
        icon: icon,
        liveUrl: liveUrl,
        icon2: icon2        
      };
      return this.httpClient.post(`${this.env.apiUrl}/experiments/create`, experiment, options)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      });
    }

    getExperimentById(id):Observable<Experiment[]> {
      return this.httpClient.get<Experiment[]>(`${this.env.apiUrl}/experiments/update/${id}`);
    }

    updateExperiment(id, title, description, url, icon, liveUrl, icon2) {
        let headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
        let options = {
          headers: headers
        }
        const experiment = {
          title: title,
          description: description,
          url: url,
          icon: icon,
          liveUrl: liveUrl,
          icon2: icon2
        };
        return this.httpClient.post(`${this.env.apiUrl}/experiments/update/${id}`, experiment, options).subscribe(data => {
        this.router.navigate(['/']);
        });    
    }    

    deleteExperiment(id) {
      return this.httpClient.get(`${this.env.apiUrl}/experiments/delete/${id}`);
    }

}