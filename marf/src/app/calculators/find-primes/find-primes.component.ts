import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, ObservableInput } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-find-primes',
  animations: [ // Can probably strip the entire "expander" into its own component
    trigger('expandCollapse', [
      state('activated', style({
        // 'transition-delay': '1s',
        transform: 'translateX(30px) rotate(90deg)'
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
  maxCharacters: number = 100;

  findPrimesForm: FormGroup;
  inputList: number[] = null;

  isSubmitting: boolean = false; // Want to use this to animate the frontend

  haveResult: boolean = false;
  primes: number[];
  nonPrimes: number[];
  respMessage: string;
  respHasError: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.findPrimesForm = new FormGroup({
      'inputString': new FormControl(null, 
        [
          Validators.required, 
          Validators.maxLength(this.maxCharacters),
          Validators.pattern(/^-?([0-9])+(,-?[0-9]+)*$/)
        ])
    });
  }

  get inputString() { return this.findPrimesForm.get('inputString'); }

  // TODO: Show hints on maximum number value, possibly maximum count of numbers to include: https://material.angular.io/components/form-field/overview#hint-labels
  
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
    if (this.inputString.valid) {
      this.haveResult = false;
      this.isSubmitting = true;

      // TODO: Make sure that the submission cannot occur while waiting on response
      this.inputList = this.inputString.value.split(',').map(element => parseInt(element));
      
      const data = {
        list: this.inputList
      };

      const requestHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      this.http.post(this.configUrl, data, { headers: requestHeaders, observe: 'response', responseType: 'json'})
        .pipe(catchError(this.handleError))
        .subscribe(
          res => {
            this.haveResult = true;
            this.isSubmitting = false;

            if (res.body.data && 
              (res.body.data['primes'] || 
              res.body.data['non_primes'] ||
              res.body.data['message'])) {
                // Parse the primes and non-primes lists
                this.primes = res.body.data['primes'].length > 0 ? res.body.data['primes'] : null;
                this.nonPrimes = res.body.data['non_primes'].length > 0 ? res.body.data['non_primes'] : null;

                this.respMessage = res.body.data['message'];
            }
            else if (res.body.data && res.body.data['has_error'] && res.body.data['message']) {
              this.respHasError = res.body.data['has_error'];
              this.respMessage = res.body.data['message'];
            }
          },
          err => {
            this.haveResult = true;
            this.isSubmitting = false;
            this.respHasError = true;
            this.respMessage = err;
        });

      return false;
    }
  }

  ngOnChanges(changes: SimpleChanges): void { }

}
