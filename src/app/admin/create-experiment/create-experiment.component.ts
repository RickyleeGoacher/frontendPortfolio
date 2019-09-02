import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ExperimentsService } from '../../services/experiments.service';
import { Experiment } from '../../models/experiment.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-experiment',
  templateUrl: './create-experiment.component.html',
  styleUrls: ['../create-project/create-project.component.sass']
})
export class CreateExperimentComponent implements OnInit {

@Input() experiments: Experiment[];
  id: String;
  experiment: any = {};   

  constructor(private fb: FormBuilder, private experimentService: ExperimentsService, private route: ActivatedRoute) {
 		this.editorForm = this.fb.group({
      		title: ['', Validators.required ],
      		description: ['', Validators.required ],
      		content: '',
      		url: ['', Validators.required ],
          liveUrl: [''],
          icon2: [''],
          id: ['']          
    	}); 
  }

    editorForm: FormGroup;
  	titleContent: string = null;
  	urlContent: string = null;
    liveUrlContent: string = null;    
  	descriptionContent: string = null;
  	iconContent: string = null;
    icon2Content: string = null;
    idContent: string = null;

  ngOnInit() {
  	this.editorForm = new FormGroup({
  		'description': new FormControl(null),
  		'title': new FormControl(null),
  		'url': new FormControl(null),
      'liveUrl': new FormControl(null),        
  		'icon': new FormControl(null),
      'icon2': new FormControl(null),
      'id': new FormControl(null)       
  	})
    this.fetchExperiment();
  }

    fetchExperiment() {
      this.route.params.subscribe(params => {
        this.id = params.id;
        this.experimentService.getExperimentById(this.id).subscribe((res: Experiment[]) => {
            this.experiment = res;
            this.editorForm.get('id').setValue(this.experiment._id);
            this.editorForm.get('title').setValue(this.experiment.title);
            this.editorForm.get('description').setValue(this.experiment.description);
            this.editorForm.get('icon').setValue(this.experiment.icon);
            this.editorForm.get('icon2').setValue(this.experiment.icon2);
            this.editorForm.get('url').setValue(this.experiment.url);
            this.editorForm.get('liveUrl').setValue(this.experiment.liveUrl);
        });
     });
    }

  	onSubmit() {
      this.titleContent = this.editorForm.get('title').value,
      this.urlContent = this.editorForm.get('url').value,
      this.descriptionContent = this.editorForm.get('description').value,
      this.iconContent = this.editorForm.get('icon').value,
      this.icon2Content = this.editorForm.get('icon2').value,
      this.liveUrlContent = this.editorForm.get('liveUrl').value 
      this.idContent = this.editorForm.get('id').value      
      if(this.idContent != '') {
        this.experimentService.updateExperiment(this.idContent, this.titleContent, this.descriptionContent, this.urlContent, this.iconContent, this.icon2Content, this.liveUrlContent)
      } else {  
  		  this.experimentService.addExperiment(this.titleContent, this.descriptionContent, this.urlContent, this.iconContent, this.icon2Content, this.liveUrlContent)
      }
    }

}
