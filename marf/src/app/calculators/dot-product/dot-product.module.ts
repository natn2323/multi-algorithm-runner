import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { DotProductComponent } from './dot-product.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', 
    component: DotProductComponent, 
    children: [
      { 
        path: 'interactive', 
        component: DotProductComponent 
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
export class DotProductModule { }
