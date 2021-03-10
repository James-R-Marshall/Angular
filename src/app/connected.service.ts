import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from './working/working.component';

@Injectable({
  providedIn: 'root'
})
export class ConnectedService {
  configURL = 'localhost:8080/Products';
  http:HttpClient;
  getConfig(){
    return this.http.get<Config>(this.configURL)
  }
  constructor(http:HttpClient) { 
  
  }
}
