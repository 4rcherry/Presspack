import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { IndexComponent } from './pages/index/index.component';
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { SupplierComponent } from './pages/supplier/supplier.component';
import { SupplierListComponent } from './components/supplier-list/supplier-list.component';
import {FormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { TableComponent } from './test/table/table.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { SupplierAddComponent } from './components/supplier-add/supplier-add.component';
import { ConfirmationComponent } from './parts/confirmation/confirmation.component';
import {MatDialogModule} from "@angular/material/dialog";
import { MaterialComponent } from './pages/material/material.component';
import { MaterialAddComponent } from './components/material-add/material-add.component';
import { MaterialListComponent } from './components/material-list/material-list.component';
import { MaterialStorageComponent } from './pages/material-storage/material-storage.component';
import { MaterialStorageAddComponent } from './components/material-storage-add/material-storage-add.component';
import { MaterialStorageListComponent } from './components/material-storage-list/material-storage-list.component';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    IndexComponent,
    SupplierComponent,
    SupplierListComponent,
    TableComponent,
    SupplierAddComponent,
    ConfirmationComponent,
    MaterialComponent,
    MaterialAddComponent,
    MaterialListComponent,
    MaterialStorageComponent,
    MaterialStorageAddComponent,
    MaterialStorageListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatToolbarModule,

  ],
  entryComponents: [
    ConfirmationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
