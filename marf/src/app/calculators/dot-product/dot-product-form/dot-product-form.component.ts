import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, ObservableInput } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';

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
  configUrl: string = '/api/dotproduct';
  minNumberOfRows: number = 1;
  maxNumberOfRows: number = 25;
  m: number = 1;

  pageTitle: string = 'Dot Product Calculator';
  metaTitle: string = 'Dot Product Calculator';
  metaDescription: string = `Accessible calculator used for computing dot products. This calculator allows vectors of maximum length ${this.maxNumberOfRows}.`;

  vector1 = [{'value': 0}];
  vector2 = [{'value': 0}];
  vector1NumberList: number[] = null;
  vector2NumberList: number[] = null;
  dotProductResult: string = '';
  errorMessageFromAPI: string = '';

  constructor(private http: HttpClient, private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void { 
    this.titleService.setTitle(this.metaTitle);
    this.metaService.addTags([
      { name: 'description', content: this.metaDescription }
    ]);
  }

  shouldShowResult(): boolean {
    const haveResult = this.dotProductResult !== '' ? true : false;
    const haveError = this.errorMessageFromAPI !== '' ? true: false;

    return haveResult || haveError;
  }

  addRow(): void {
    if (this.vector1.length < this.maxNumberOfRows && this.vector2.length < this.maxNumberOfRows) {
      this.vector1.push({'value': 0});
      this.vector2.push({'value': 0});
      this.m++;
    }
  }

  deleteRow(): void {
    if (this.vector1.length > this.minNumberOfRows && this.vector2.length > this.minNumberOfRows) {
      this.vector1.pop();
      this.vector2.pop();
      this.m--;
    }
  }

  resetAllEntries(): void {
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

  // This function was taken from an online source.
  private handleError(error: HttpErrorResponse): ObservableInput<any> {
    let errorMessage: string = '';

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = error.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = error.error;
    }
    // return an observable with a user-facing error message
    return throwError(errorMessage);
  }

  onSubmit(): boolean {
    // TODO: Make sure that the submission cannot occur while the vectorLengthOnChange function is being run
    this.vector1NumberList = this.vector1.map((element) => element.value);
    this.vector2NumberList = this.vector2.map((element) => element.value);


    console.log(Array.isArray(this.vector1NumberList));

    console.log(typeof this.vector1NumberList);
    console.log(this.vector1NumberList);

    const data = {
      list1: this.vector1NumberList,
      list2: this.vector2NumberList
    };

    const requestHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // TODO: (*)Have a spinner icon or progress bar which displays while request is in progress
    this.http.post(this.configUrl, data, { headers: requestHeaders, observe: 'response', responseType: 'json' })
      .pipe(catchError(this.handleError))
      .subscribe(
        res => {
          if (res.body.data && res.body.data.value !== null) {
            this.dotProductResult = res.body.data.value.toString();
            this.errorMessageFromAPI = '';
          }
          else {
            this.dotProductResult = '';
            this.errorMessageFromAPI = res.body.data.message;
          }
        },
        err => {
          this.dotProductResult = '';
          this.errorMessageFromAPI = err;
        });

    return false;
  }

  onInputKeyDown(event: any): boolean {
    if (event.key === 'e') {
      return false;
    }
  }

  onCounterKeyDown(event: any): boolean {
    if (event.key === '.' || event.key === '-' || event.key === 'e') {
      return false;
    }
    
    return true;
  }

  onCounterEnter(event: any): boolean {
    // Keep input number within bounds, and update the number in input element.
    if (!event || (parseInt(event) < this.minNumberOfRows)) {
      this.m = this.minNumberOfRows;
    }
    else if (parseInt(event) > this.maxNumberOfRows) {
      this.m = this.maxNumberOfRows;
    }

    let vectorLength = this.vector1.length;
    if (this.m === vectorLength) {
      // Don't do anything.
    } 
    else if (this.m > vectorLength) {
      for (let i = vectorLength; i < this.m; i++) {
        this.vector1.push({'value': 0});
        this.vector2.push({'value': 0});
      }
    }
    else {
      this.vector1.splice(this.m);
      this.vector2.splice(this.m);
    }

    return true;
  }

}
