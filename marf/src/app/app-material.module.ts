import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule
    ]
})

export class AngularMaterialModule { }