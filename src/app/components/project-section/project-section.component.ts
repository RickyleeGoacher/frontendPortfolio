import { Component, OnInit, Input } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.sass']
})
export class ProjectSectionComponent implements OnInit {

  @Input() projects: Project[];

  constructor(private projectService: ProjectsService, private userService: UserService) { }

  ngOnInit() {
  	this.fetchProjects();
  }

  fetchProjects() {
  	this.projectService.getProjects().subscribe((data: Project[]) => {
  		this.projects = data;
  		console.log(this.projects);
  	});	
  }

  deleteProject(id) {
    this.projectService.deleteProject(id).subscribe(res => {
      console.log('Deleted');
      this.fetchProjects();
    })
  }

}
