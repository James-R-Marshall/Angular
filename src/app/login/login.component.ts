
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username;
    password;
    url;
    
    service;
  login: Observable<Object>;

    constructor( private route: ActivatedRoute, service:AuthService) { 
      this.login = service.getauth(this.username, this.password);
    }

    onClick(){
      this.login.subscribe(r=>{
        console.log(r);
      });
    }
  
    ngOnInit(): void {
     this.route.queryParamMap.subscribe( res=>{
        this.password = res.get("password")
        this.username = res.get("username")
     })
      

    }
  }
