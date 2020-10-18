import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNumbersComponent } from './prime-numbers.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PrimeNumbersComponent,
    children: [
      {
        path: 'interactive',
        component: PrimeNumbersComponent
      },
      // {
      //   path: 'examples',
      //   // TODO: Add component or template or something
      // },
      {
        path: '',
        redirectTo: 'interactive',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PrimeNumbersModule { }
