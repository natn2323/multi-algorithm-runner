import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DotProductRoutingModule } from './dot-product-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    DotProductRoutingModule
  ],
  exports: [RouterModule]
})
export class DotProductModule { }
