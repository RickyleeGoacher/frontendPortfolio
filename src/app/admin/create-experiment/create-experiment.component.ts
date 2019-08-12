import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ExperimentsService } from '../../services/experiments.service';
import { Experiment } from '../../models/experiment.model';

@Component({
  selector: 'app-create-experiment',
  templateUrl: './create-experiment.component.html',
  styleUrls: ['../create-project/create-project.component.sass']
})
export class CreateExperimentComponent implements OnInit {

  constructor(private fb: FormBuilder, private experimentService: ExperimentsService) {
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
  		this.experimentService.addExperiment(this.titleContent, this.descriptionContent, this.urlContent, this.iconContent)
    }

}
