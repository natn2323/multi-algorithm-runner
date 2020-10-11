import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DotProductFormComponent } from './calculators/dot-product/dot-product-form/dot-product-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DotProductResultsComponent } from './calculators/dot-product/dot-product-results/dot-product-results.component';
import { AngularMaterialModule } from 'src/app/app-material.module';
import { CalculatorsComponent } from './calculators/calculators.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FindPrimesComponent } from './calculators/find-primes/find-primes.component';
import { AriaErrorIconComponent } from './shared/aria-error-icon/aria-error-icon.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { MenuItemComponent } from './shared/menu-item/menu-item.component';
import { MenuItemsComponent } from './shared/menu-items/menu-items.component';

@NgModule({
  declarations: [
    AppComponent,
    DotProductFormComponent,
    DotProductResultsComponent,
    CalculatorsComponent,
    AboutComponent,
    PageNotFoundComponent,
    FindPrimesComponent,
    AriaErrorIconComponent,
    SideNavComponent,
    MenuItemComponent,
    MenuItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
