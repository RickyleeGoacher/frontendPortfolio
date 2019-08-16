import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AboutTextService } from '../../services/about-text.service';
import { AboutText } from '../../models/about-text.model';

@Component({
  selector: 'app-create-about',
  templateUrl: './create-about.component.html',
  styleUrls: ['../create-project/create-project.component.sass']
})
export class CreateAboutComponent implements OnInit {

	id: String;
	about: any = {};

  constructor(private fb: FormBuilder, private aboutTextService: AboutTextService) {
    	this.editorForm = this.fb.group({
      		text: ['', Validators.required ],
      		id: ['', Validators.required ]
    	}); 
   }

    editorForm: FormGroup;
  	textContent: string = null;
  	idContent: string =null;

  ngOnInit() {
  	this.editorForm = new FormGroup({
  		'text': new FormControl(null),
  		'id': new FormControl(null)
  	})
  	this.fetchAbout();
  }

    fetchAbout() {
  	this.aboutTextService.getAbout().subscribe((data: AboutText[]) => {
  		this.about = data[0];
  		this.editorForm.get('text').setValue(this.about.text);
        this.editorForm.get('id').setValue(this.about._id);
  	})
  }

  	onSubmit() {
  		this.textContent = this.editorForm.get('text').value
  		this.idContent = this.editorForm.get('id').value

  		if(this.idContent != "") {
    		this.aboutTextService.updateAbout(this.idContent, this.textContent)
		} else {
			this.aboutTextService.addAbout(this.textContent)
		}
	}

}
