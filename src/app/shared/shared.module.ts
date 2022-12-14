import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MaterialModule } from './material/material.module';
import { ResupplyLocationDetailsComponent } from './resupply-timeline/resupply-point/resupply-location/resupply-location-details/resupply-location-details.component';
import { ResupplyLocationComponent } from './resupply-timeline/resupply-point/resupply-location/resupply-location.component';
import { ResupplyPointComponent } from './resupply-timeline/resupply-point/resupply-point.component';
import { ResupplyTimelineComponent } from './resupply-timeline/resupply-timeline.component';

// DeclarationsToExport
const components = [
  ResupplyTimelineComponent,
];
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
    ResupplyTimelineComponent,
    ResupplyPointComponent,
    ResupplyLocationComponent,
    ResupplyLocationDetailsComponent,
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
