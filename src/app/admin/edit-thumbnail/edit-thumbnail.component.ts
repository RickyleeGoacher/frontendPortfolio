import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thumbnail',
  templateUrl: './edit-thumbnail.component.html',
  styleUrls: ['../create-project/create-project.component.sass']
})
export class EditThumbnailComponent implements OnInit {

@Input() projects: Project[];

	id: String;
	project: any = {};

  constructor(private fb: FormBuilder, private projectService: ProjectsService, private router: Router, private route: ActivatedRoute) {
        this.editorForm = this.fb.group({
            title: ['', Validators.required ],
            description: ['', Validators.required ],
            icon: ['', Validators.required ],
            url: ['', Validators.required ],
            liveUrl: [''],
            icon2: [''],
            id: ['', Validators.required ]
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
    });
    this.fetchProject();
  }

  	fetchProject() {
    	this.route.params.subscribe(params => {
    		this.id = params.id;
    		this.projectService.getProjectById(this.id).subscribe((res: Project[]) => {
        		this.project = res;
        		this.editorForm.get('id').setValue(this.project._id);
        		this.editorForm.get('title').setValue(this.project.title);
        		this.editorForm.get('description').setValue(this.project.description);
        		this.editorForm.get('icon').setValue(this.project.icon);
        		this.editorForm.get('icon2').setValue(this.project.icon2);
        		this.editorForm.get('url').setValue(this.project.url);
        		this.editorForm.get('liveUrl').setValue(this.project.liveUrl);
    		});
 		});
  	}

    onSubmit() {
        this.idContent = this.editorForm.get('id').value
        this.titleContent = this.editorForm.get('title').value,
        this.urlContent = this.editorForm.get('url').value,
        this.descriptionContent = this.editorForm.get('description').value,
        this.iconContent = this.editorForm.get('icon').value,
        this.icon2Content = this.editorForm.get('icon2').value,
        this.liveUrlContent = this.editorForm.get('liveUrl').value
        this.projectService.updateProject(this.idContent, this.titleContent, this.descriptionContent, this.urlContent, this.iconContent, this.liveUrlContent, this.icon2Content)    
    }

}
