import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorsComponent } from './calculators/calculators.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DotProductFormComponent } from './calculators/dot-product-calculator/dot-product-form/dot-product-form.component';

const routes: Routes = [
  { 
    path: 'calculators', 
    component: CalculatorsComponent,
    children: [
      { 
        path: 'dotproduct', 
        component: DotProductFormComponent 
      }
    ]
  },
  { 
    path: 'about', 
    component: AboutComponent 
  },
  { 
    path: '', 
    redirectTo: '/calculators/dotproduct', // When root page is accessed, redirect to dot product calculator
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
