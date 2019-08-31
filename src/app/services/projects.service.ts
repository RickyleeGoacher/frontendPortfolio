import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../models/project.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

	private env = environment;

	constructor(private httpClient: HttpClient, private router: Router) { }

	getProjects():Observable<Project[]> {
		return this.httpClient.get<Project[]>(`${this.env.apiUrl}/projects`);
	}

    addProject(title, description, url, icon, liveUrl, icon2) {
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
        icon: icon,
        liveUrl: liveUrl,
        icon2: icon2
      };
      return this.httpClient.post(`${this.env.apiUrl}/projects/create`, project, options)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      });
    }

    getProjectById(id):Observable<Project[]> {
      return this.httpClient.get<Project[]>(`${this.env.apiUrl}/projects/update/${id}`);
    }

    updateProject(id, title, description, url, icon, liveUrl, icon2) {
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
          icon: icon,
          liveUrl: liveUrl,
          icon2: icon2
        };
        return this.httpClient.post(`${this.env.apiUrl}/projects/update/${id}`, project, options).subscribe(data => {
        this.router.navigate(['/']);
        });    
    }

    deleteProject(id) {
      return this.httpClient.get(`${this.env.apiUrl}/projects/delete/${id}`);
    }

}
