import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './material/material.module';

// DeclarationsToExport
const components: any[] = [];
const directives: any[] = [];
const pipes: any[] = [];

const declarationsToExport = [
  ...components,
  ...directives,
  ...pipes,
];

const localDeclarations: any[] = [];

const importsToExport = [
  CommonModule,
  FontAwesomeModule,
  FormsModule,
  MaterialModule,
];

const localImports = [RouterModule];

const entryComponents: any[] = [];

@NgModule({
  declarations: [
    ...localDeclarations,
    ...declarationsToExport,
  ],
  exports: [
    ...declarationsToExport,
    ...importsToExport,
  ],
  entryComponents: [...entryComponents],
  imports: [
    ...localImports,
    ...importsToExport,
  ],
})
export class SharedModule { }