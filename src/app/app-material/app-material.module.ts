// General imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material related imports
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    MatButtonModule
  ]
})

/// This module will be used to import all stuff related to Angular Material
// New imports will be handled here, the AppModule will remain untouched then

export class AppMaterialModule { }
