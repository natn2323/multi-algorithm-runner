import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, ObservableInput } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-find-primes',
  animations: [ // Can probably strip the entire "expander" into its own component
    trigger('expandCollapse', [
      state('activated', style({
        transform: 'translateX(40px) rotate(90deg)'
      })),
      state('*', style({

      })),
      transition('activated => *', [
        animate('0.5s')
      ]),
      transition('* => activated', [
        animate('0.5s')
      ])
    ])
  ],
  templateUrl: './find-primes.component.html',
  styleUrls: ['./find-primes.component.less']
})
export class FindPrimesComponent implements OnInit {
  configUrl: string = '/api/findprimes';
  maxNumberValue: number = 1000000;

  pageTitle: string = 'Prime Number Checker';
  metaTitle: string = 'Prime Number Checker';
  metaDescription: string = `Accessible calculator for checking if a number is prime or not. This calculator can check if numbers up to ${this.maxNumberValue} are prime.`;

  input: string = null;

  isSubmitting: boolean = false;
  hasValidationError: boolean;
  validationErrorMessage: string;
  hasResult: boolean = false;
  primes: number[];
  nonPrimes: number[];
  respMessage: string;
  respHasError: boolean;

  constructor(private http: HttpClient, private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.metaTitle);
    this.metaService.addTags([
      { name: 'description', content: this.metaDescription }
    ]);
  }

  private parseInput(input: string): number[] {
    if (!input) {
      this.hasValidationError = true;
      this.validationErrorMessage = 'Input is empty. Please input a number.';
      return null;
    }
    else if (input.includes('.') || input.includes('-')) {
      this.hasValidationError = true;
      this.validationErrorMessage = 'Input is invalid. Only non-negative integers are accepted.';
      return null;
    }
    else {
      const inputList: number[] = input.split(',').map(element => parseFloat(element)); 
      let i: number;
      
      for (i = 0; i < inputList.length; i++) {
        if (Number.isNaN(inputList[i])) {
          this.hasValidationError = true;
          this.validationErrorMessage = 'Input is invalid. Only non-negative integers are accepted.';
          return null;
        }
        else if (inputList[i] > this.maxNumberValue) {
          this.hasValidationError = true;
          this.validationErrorMessage = 'Max number is 1,000,000. Please use smaller numbers.';
          return null;
        }
      }
      
      this.hasValidationError = false;
      return inputList;
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
    // Reset the values so that they are not detected by screen readers when focusing on the "Results" chip
    this.hasResult = false;
    this.primes = null;
    this.nonPrimes = null;
    this.respMessage = null;
    this.respHasError = false;

    const parsedInput = this.parseInput(this.input);

    if (parsedInput !== null) {
      this.isSubmitting = true;
  
      const data = {
        list: parsedInput
      };
  
      const requestHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
      });
  
      this.http.post(this.configUrl, data, { headers: requestHeaders, observe: 'response', responseType: 'json'})
        .pipe(catchError(this.handleError))
        .subscribe(
          res => {
            this.hasResult = true;
            this.isSubmitting = false;
  
            if (res.body.data && 
              (res.body.data['primes'] || 
              res.body.data['non_primes'] ||
              res.body.data['message'])) {
                // Parse the primes and non-primes lists
                this.primes = res.body.data['primes'].length > 0 ? res.body.data['primes'] : null;
                this.nonPrimes = res.body.data['non_primes'].length > 0 ? res.body.data['non_primes'] : null;
            }
            else if (res.body.data && res.body.data['has_error'] && res.body.data['message']) {
              this.respHasError = res.body.data['has_error'];
              this.respMessage = res.body.data['message'];
            }
          },
          err => {
            this.hasResult = true;
            this.isSubmitting = false;
            this.respHasError = true;
            this.respMessage = err;
        });
    }

    return false;
  }

}
