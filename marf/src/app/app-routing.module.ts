import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DotProductFormComponent } from './dot-product-form/dot-product-form.component';

const routes: Routes = [
  // { path: '', }
  // { path: '/calculators/', component: DotProductFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
