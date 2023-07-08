import { Component, OnInit } from '@angular/core';
//http
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
  providers: [MessageService]
})
export class HttpComponent implements OnInit {

  //
  // https://www.positronx.io/angular-error-handling-tutorial-with-examples/
  //

  errorMessage;
  jsonData;

  //remote json datatable array
  jsonDataArray;

  //remote json datatable object
  jsonDataObject; 

  constructor(private http: HttpClient, private messageService: MessageService, private primengConfig: PrimeNGConfig) {

    this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular')
      .pipe(catchError(this.erroHandler))
      .subscribe(arrayData => {
          this.jsonDataArray = arrayData.results;
          console.log('data', this.jsonDataArray);
    }).unsubscribe

  }

  erroHandler(error: HttpErrorResponse) {    
    console.log('error:' , error.message);
    return throwError(error.message || 'server Error');
  }

  checkForErrors() {
    //this.http.get<any>('httpsss://api.npms.io/v2/search?q=scope:wangular')
    //  .pipe(catchError(this.erroHandler))
    //  .subscribe(arrayData => {
    //    if (Error) { console.log("undefined"); this.messageService.add({ severity: 'error', summary: 'Error', detail: 'That was a terrible request, wow! ' }); }
    //    this.jsonDataArray = arrayData.results;
    //    console.log('data', this.jsonDataArray);
    //  }).unsubscribe

    //https://jasonwatmore.com/post/2019/09/06/angular-http-get-request-examples
    this.http.get<any>('httpss://api.npms.io/v2/search?q=scope:angular').subscribe({
      next: arrayData => {
        this.jsonDataArray = arrayData.results;
      },
      error: error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'That was a terrible request, wow! ' }); 
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    })
  }

  checkForSuccess() {
    this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular')
      .pipe(catchError(this.erroHandler))
      .subscribe(arrayData => {
        if (arrayData.results.length > 1) { this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Nice request ! ' }); }
        this.jsonDataArray = arrayData.results;
        console.log('data', this.jsonDataArray);
      }).unsubscribe
  }

  ngOnInit(): void {

  }

}
