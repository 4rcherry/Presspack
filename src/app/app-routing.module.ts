import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from "./pages/index/index.component";
import {SupplierComponent} from "./pages/supplier/supplier.component";
import {TableComponent} from "./test/table/table.component";
import {MaterialComponent} from "./pages/material/material.component";
import {MaterialStorageComponent} from "./pages/material-storage/material-storage.component";
import {MaterialInventoryComponent} from "./pages/material-inventory/material-inventory.component";


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'supplier', component: SupplierComponent},
  {path: 'material', component: MaterialComponent},
  {path: 'material/storage', component: MaterialStorageComponent},
  {path: 'material/inventory', component: MaterialInventoryComponent},

  {path: 'test/table', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
