import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNumbersRoutingModule } from './prime-numbers-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    PrimeNumbersRoutingModule
  ],
  exports: [RouterModule]
})
export class PrimeNumbersModule { }
