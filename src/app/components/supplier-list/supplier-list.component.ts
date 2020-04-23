import {Component, Input, OnInit, ViewChild} from '@angular/core';
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
    this.deleteData(data)
  }

  deleteData(data:Supplier) {
    try {
      this.service.deleteData(data).subscribe(result => {
        console.log("Success!")
      });
    } catch (e) {
      console.log(e)
    }
  }
}

