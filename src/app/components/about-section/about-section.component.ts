import { Component, OnInit, Input } from '@angular/core';
import { AboutTextService } from '../../services/about-text.service';
import { AboutText } from '../../models/about-text.model';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.sass']
})
export class AboutSectionComponent implements OnInit {

	@Input() about: AboutText[];

  constructor(private aboutTextService: AboutTextService) { }

  ngOnInit() {
  	this.fetchAboutText();
  }

    fetchAboutText() {
  	this.aboutTextService.getAbout().subscribe((data: AboutText[]) => {
  		this.about = data;
  		console.log(this.about);
  	});	
  }

}
