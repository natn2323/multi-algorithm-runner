import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-dot-product-form',
  templateUrl: './dot-product-form.component.html',
  styleUrls: ['./dot-product-form.component.less']
})
export class DotProductFormComponent implements OnInit {
  /* 
  See https://angular.io/guide/form-validation#built-in-validator-functions if you want to see how to add custom validators.
  */
  // TODO: Make this hardcoded URL configurable, using environments/environment.<area>.ts files
  configUrl: string = 'http://localhost:4200';

  vector1 = [{'value': 0}];
  vector2 = [{'value': 0}];
  m: number = 1;

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  addRow() {
    this.vector1.push({'value': 0});
    this.vector2.push({'value': 0});
    this.m++;
  }

  deleteRow() {
    if (this.vector1.length > 1 && this.vector2.length > 1) {
      this.vector1.pop();
      this.vector2.pop();
      this.m--;
    }
  }

  resetAllEntries() {
    // // Note: introduce a bug for Jae to find
    // this.vector1.fill({'value': 0});
    // this.vector2.fill({'value': 0});

    // Assume vector lengths are the same size
    // TODO: Check that the vector lengths are the same size
    let vectorLength = this.vector1.length;

    // Need to avoid passing a reference to the same object,
    // otherwise changing one row will change all rows in vector
    this.vector1 = new Array(vectorLength);
    this.vector2 = new Array(vectorLength);
    for (let i = 0; i < vectorLength; i++) { 
      this.vector1[i] = {'value': 0};
      this.vector2[i] = {'value': 0};
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  onSubmit() {
    // TODO: Make sure that the submission cannot occur while the vectorLengthOnChange function is being run

    const vector1: number[] = this.vector1.map((element) => element.value);
    const vector2: number[] = this.vector2.map((element) => element.value);

    const data = {
      list1: vector1,
      list2: vector2
    };

    const options = {
      observe: 'body|response',
      responseType: 'json'  
    };

    const requestHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // TODO: Send a request to server
    this.http.post(this.configUrl, data, { headers: requestHeaders, observe: 'response', responseType: 'json' })
      .pipe(catchError(this.handleError))
      .subscribe(res => {
        console.log(res);
      })

    return false;
  }

  vectorLengthOnChange(event) {
    if (this.m > 0) {
      setTimeout(() => {

        // Assume vector lengths are the same size
        // TODO: Check tha tthe vector lengths are the same size
        let vectorLength = this.vector1.length;
        if (this.m > vectorLength) {
          for (let i = vectorLength; i < this.m; i++) {
            this.vector1.push({'value': 0});
            this.vector2.push({'value': 0});
          }
        }
        else {
          this.vector1.splice(this.m);
          this.vector2.splice(this.m);
        }
      }, 1500);
    }
  }
}
