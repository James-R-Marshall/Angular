import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service'
import jwt_decode from 'jwt-decode';
export interface Config{
  body: string;
}

@Component({
  selector: 'app-working',
  templateUrl: './working.component.html',
  styleUrls: ['./working.component.css']
})

export class WorkingComponent implements OnInit {
    data$: string;
    
  constructor(private cookies:CookieService) { 
    if(cookies.get("session")){
      this.data$ = cookies.get("session");
      this.data$ = jwt_decode(this.data$);
      this.data$ = this.data$["Username"];

    }
    else this.data$ = "0";
    
  }

  ngOnInit(): void {
  }

}
