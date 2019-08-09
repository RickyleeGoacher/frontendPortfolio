import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

	apiURL: string = 'http://localhost:3000/api'

	constructor(private httpClient: HttpClient) { }

	getProjects():Observable<Project[]> {
		return this.httpClient.get<Project[]>(`${this.apiURL}/projects`);
	}

}
