
/// This module will be used to import all stuff related to Angular Material
// New imports will be handled here, the AppModule will remain untouched then

// General imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material related imports
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule
  ]
})

export class AppMaterialModule { }
