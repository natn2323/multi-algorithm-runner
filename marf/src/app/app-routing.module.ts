import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorsComponent } from './calculators/calculators.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { 
    path: 'calculators', 
    component: CalculatorsComponent,
    children: [
      {
        path: 'dotproduct',
        loadChildren: () => import('./calculators/dot-product/dot-product.module').then(m => m.DotProductModule)
      },
      {
        path: 'primenumbers',
        loadChildren: () => import('./calculators/prime-numbers/prime-numbers.module').then(m => m.PrimeNumbersModule)
      },
      { 
        path: '', 
        redirectTo: '/calculators/dotproduct/interactive', // When root page is accessed, redirect to dot product calculator
        pathMatch: 'full' 
      },
    ]
  },
  { 
    path: 'about', 
    component: AboutComponent 
  },
  { 
    path: '', 
    redirectTo: '/calculators/dotproduct/interactive', // When root page is accessed, redirect to dot product calculator
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
