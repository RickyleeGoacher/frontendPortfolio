import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit {

  public success: any;
  public failure: any;

  constructor(private fb: FormBuilder, private contactService: ContactService) { 
        this.editorForm = this.fb.group({
            name: ['', Validators.required ],
            email: ['', Validators.required ],
            message: ['', Validators.required ]
        });
  }

    editorForm: FormGroup;
    nameContent: string = null;
    emailContent: string = null;
    messageContent: string = null;

  ngOnInit() {
    this.editorForm = new FormGroup({
        'name': new FormControl(null),
        'email': new FormControl(null),
        'message': new FormControl(null)
    });
  }

    onSubmit() {
        this.nameContent = this.editorForm.get('name').value,
        this.emailContent = this.editorForm.get('email').value,
        this.messageContent = this.editorForm.get('message').value,
        this.contactService.sendMessage(this.nameContent, this.emailContent, this.messageContent).subscribe(data => {
          console.log(data);
          this.success = data
          this.failure = data
        });
    }

}
