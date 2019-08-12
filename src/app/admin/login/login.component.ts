import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

	loginForm : FormGroup=new FormGroup({
    	email:new FormControl(null,[Validators.email,Validators.required]),
    	password:new FormControl(null, Validators.required)
  	});

  constructor(private router:Router, private userService:UserService) { }

	public errorMessage: string = '';

  ngOnInit() {
  }

    moveToRegister(){
    	this.router.navigate(['/register']);
  	}

  	onSubmit(){
    	if(!this.loginForm.valid){
     		console.log('Invalid');
     	return;
    	}

    	this.userService.login(JSON.stringify(this.loginForm.value))
    	.subscribe(
    		res => {
        		if(res.user) {
        			sessionStorage.setItem('token', res.token)
        			const decoded = jwt_decode(res.token)
        			sessionStorage.setItem('expire', decoded.exp)
       				this.router.navigate(['/'])
        		} else {
          			this.errorMessage = res.message;
        		}
      		},
      		error=>console.error(error)
    	)
	}

}
