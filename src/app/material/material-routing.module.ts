import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddressFormComponent} from './address-form/address-form.component';
import {FormControlsComponent} from './form-controls/form-controls.component';
import {LayoutComponent} from './layout/layout.component';
import {TableComponent} from './table/table.component';
import {DashBoardComponent} from './dash-board/dash-board.component';


const routes: Routes = [
  {path: 'material/addressForm', component: AddressFormComponent},
  {path: 'material/formControls', component: FormControlsComponent},
  {path: 'material/layout', component: LayoutComponent},
  {path: 'material/table', component: TableComponent},
  {path: 'material/dashBoard', component: DashBoardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule {
}
