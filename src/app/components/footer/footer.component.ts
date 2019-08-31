import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  constructor(public userService:UserService, private router:Router) { }

  ngOnInit() {
  }

  logout() {
    this.userService.logout()
  	    .subscribe(
  		    data => {
            	sessionStorage.removeItem('token');
            	sessionStorage.removeItem('expire');
            	this.router.navigate(['/login']);
          	},
  		    error => {
            	console.error(error);
          	}
  		)
  }  

}
