import { Component, OnInit } from '@angular/core';
//http
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
  jsonData;

  //remote json datatable array
  jsonDataArray;

  //remote json datatable object
  jsonDataObject;

  constructor(private http: HttpClient) {
    this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(arrayData => {
      this.jsonDataArray = arrayData.results;
      console.log('data', this.jsonDataArray);
    })
  }

  ngOnInit(): void {
  }

}
