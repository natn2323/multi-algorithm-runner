import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { DotProductComponent } from './dot-product.component';

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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DotProductRoutingModule { }
