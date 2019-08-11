import { Component, OnInit, Input } from '@angular/core';
import { ExperimentsService } from '../../services/experiments.service';
import { Experiment } from '../../models/experiment.model';

@Component({
  selector: 'app-experiments-section',
  templateUrl: './experiments-section.component.html',
  styleUrls: ['../project-section/project-section.component.sass']
})
export class ExperimentsSectionComponent implements OnInit {

  @Input() experiments: Experiment[];

  constructor(private experimentService: ExperimentsService) { }

  ngOnInit() {
  	this.fetchExperiments();
  }

  fetchExperiments() {
  	this.experimentService.getExperiments().subscribe((data: Experiment[]) => {
  		this.experiments = data;
  		console.log(this.experiments);
  	});	
  }

}
