import { Component, OnInit, Input } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.sass']
})
export class ProjectSectionComponent implements OnInit {

  @Input() projects: Project[];

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
  	this.fetchProjects();
  }

  fetchProjects() {
  	this.projectService.getProjects().subscribe((data: Project[]) => {
  		this.projects = data;
  		console.log(this.projects);
  	});	
  }

}
