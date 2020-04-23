import {Component, OnInit, ViewChild} from '@angular/core';
import {Supplier} from "../../models/Supplier";
import {SupplierService} from "../../services/supplier.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  suppliers:Supplier[];
  dataSource  = [];
  tableColumns:string[] = ['name', 'product', 'address'];
  constructor(private service:SupplierService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((result) => {
      this.dataSource = result
    })
  }

}
