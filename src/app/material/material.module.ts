import {NgModule} from '@angular/core';

import {MaterialRoutingModule} from './material-routing.module';
import {NavComponent} from './nav/nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {AddressFormComponent} from './address-form/address-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormControlsComponent} from './form-controls/form-controls.component';
import {
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatGridListModule,
  MatNativeDateModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTabsModule
} from '@angular/material';
import {LayoutComponent} from './layout/layout.component';
import {TableComponent} from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {MatMenuModule} from '@angular/material/menu';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [NavComponent, AddressFormComponent, FormControlsComponent, LayoutComponent, TableComponent, DashBoardComponent],
  exports: [
    NavComponent
  ],
  imports: [
    SharedModule,
    MaterialRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatGridListModule,
    MatStepperModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatSnackBarModule,
  ]
})
export class MaterialModule {
}
