import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Supplier} from "../../models/Supplier";
import {SupplierService} from "../../services/supplier.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationComponent} from "../../parts/confirmation/confirmation.component";

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('successDialogDelete') successDialogDelete: TemplateRef<any>;
  @ViewChild('failedDialogDelete') failedDialogDelete: TemplateRef<any>;

  suppliers:Supplier[];
  dataSource  = [];
  tableColumns:string[] = ['name', 'product', 'address', '_id'];
  constructor(private service:SupplierService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((result) => {
      this.dataSource = result
    })
  }

  onDelete(data) {
    try {
      this.deleteData(data);
      this.dialog.open(this.successDialogDelete);
    } catch (e) {
      console.log(e);
      this.dialog.open(this.failedDialogDelete);
    }
  }

  deleteData(data:Supplier) {
    try {
      this.service.deleteData(data).subscribe(result => {
        window.location.reload();
      });
    } catch (e) {
      console.log(e)
    }
  }
}

