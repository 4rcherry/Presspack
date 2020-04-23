import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from "./pages/index/index.component";
import {SupplierComponent} from "./pages/supplier/supplier.component";
import {TableComponent} from "./test/table/table.component";
import {MaterialComponent} from "./pages/material/material.component";


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'supplier', component: SupplierComponent},
  {path: 'material', component: MaterialComponent},

  {path: 'test/table', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
