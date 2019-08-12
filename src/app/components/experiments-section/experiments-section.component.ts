import { Component, OnInit, Input } from '@angular/core';
import { ExperimentsService } from '../../services/experiments.service';
import { Experiment } from '../../models/experiment.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-experiments-section',
  templateUrl: './experiments-section.component.html',
  styleUrls: ['../project-section/project-section.component.sass']
})
export class ExperimentsSectionComponent implements OnInit {

  @Input() experiments: Experiment[];

  constructor(private experimentService: ExperimentsService, private userService: UserService) { }

  ngOnInit() {
  	this.fetchExperiments();
  }

  fetchExperiments() {
  	this.experimentService.getExperiments().subscribe((data: Experiment[]) => {
  		this.experiments = data;
  		console.log(this.experiments);
  	});	
  }

  deleteExperiment(id) {
    this.experimentService.deleteExperiment(id).subscribe(res => {
      console.log('Deleted');
      this.fetchExperiments();
    })
  }

}
