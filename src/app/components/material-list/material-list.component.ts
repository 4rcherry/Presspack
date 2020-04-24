import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {Material} from "../../models/Material";
import {MaterialService} from "../../services/material.service";

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('successDialogDelete') successDialogDelete: TemplateRef<any>;
  @ViewChild('failedDialogDelete') failedDialogDelete: TemplateRef<any>;

  materials:Material[];
  dataSource=[];
  tableColumns:string[] = ['supplier_id', 'name', 'unit', 'price', '_id'];
  constructor(private service:MaterialService, public dialog: MatDialog) { }

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

  deleteData(data:Material) {
    try {
      this.service.deleteData(data).subscribe(result => {
        window.location.reload();
      });
    } catch (e) {
      console.log(e)
    }
  }
}
