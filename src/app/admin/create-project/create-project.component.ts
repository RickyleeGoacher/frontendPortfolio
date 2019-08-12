import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.sass']
})
export class CreateProjectComponent implements OnInit {

  constructor(private fb: FormBuilder, private projectService: ProjectsService) {
 		this.editorForm = this.fb.group({
      		title: ['', Validators.required ],
      		description: ['', Validators.required ],
      		content: '',
      		url: ['', Validators.required ]
    	});  	
  }

    editorForm: FormGroup;
  	titleContent: string = null;
  	urlContent: string = null;
  	descriptionContent: string = null;
  	iconContent: string = null;

  ngOnInit() {
  	this.editorForm = new FormGroup({
  		'description': new FormControl(null),
  		'title': new FormControl(null),
  		'url': new FormControl(null),
  		'icon': new FormControl(null)
  	})
  }

  	onSubmit() {
  		this.titleContent = this.editorForm.get('title').value,
  		this.urlContent = this.editorForm.get('url').value,
  		this.descriptionContent = this.editorForm.get('description').value,
  		this.iconContent = this.editorForm.get('icon').value,
  		this.projectService.addProject(this.titleContent, this.descriptionContent, this.urlContent, this.iconContent)
    }

}
