import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

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
    
  constructor(http:HttpClient) { 
    http.get('http://localhost:8080/Products').subscribe(res =>{
      console.log(res);
    })
  }

  ngOnInit(): void {
  }

}
