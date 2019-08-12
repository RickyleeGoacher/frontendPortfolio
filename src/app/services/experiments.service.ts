import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Experiment } from '../models/experiment.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExperimentsService {

  	apiURL: string = 'http://localhost:3000/api'

	constructor(private httpClient: HttpClient, private router: Router) { }

	getExperiments():Observable<Experiment[]> {
		return this.httpClient.get<Experiment[]>(`${this.apiURL}/experiments`);
	}

    addExperiment(title, description, url, icon) {
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
        icon: icon
      };
      return this.httpClient.post(`${this.apiURL}/experiments/create`, experiment, options)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      });
    }

    deleteExperiment(id) {
      return this.httpClient.get(`${this.apiURL}/experiments/delete/${id}`);
    }

}