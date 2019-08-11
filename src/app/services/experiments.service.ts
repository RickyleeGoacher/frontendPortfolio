import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experiment } from '../models/experiment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperimentsService {

  	apiURL: string = 'http://localhost:3000/api'

	constructor(private httpClient: HttpClient) { }

	getExperiments():Observable<Experiment[]> {
		return this.httpClient.get<Experiment[]>(`${this.apiURL}/experiments`);
	}

}