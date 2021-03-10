import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  entries;
  page;
  size;
  url;
  constructor(http:HttpClient, private route: ActivatedRoute) { 
    this.ngOnInit();
    this.url = `http://localhost:8080/products?page=${this.page}&size=${this.size}`
    console.log(this.url)
    http.get(this.url).subscribe(res =>{
      this.entries = res;
      console.log(this.entries);
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res=>{
      this.page = res.get("page")
      this.size = res.get("size")
    })
  }

}
