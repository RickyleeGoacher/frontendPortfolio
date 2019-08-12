import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../models/project.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

	apiURL: string = 'http://localhost:3000/api'

	constructor(private httpClient: HttpClient, private router: Router) { }

	getProjects():Observable<Project[]> {
		return this.httpClient.get<Project[]>(`${this.apiURL}/projects`);
	}

    addProject(title, description, url, icon) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      let options = {
        headers: headers
       }
      const project = {
        title: title,
        description: description,
        url: url,
        icon: icon
      };
      return this.httpClient.post(`${this.apiURL}/projects/create`, project, options)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      });
    }

    deleteProject(id) {
      return this.httpClient.get(`${this.apiURL}/projects/delete/${id}`);
    }

}
