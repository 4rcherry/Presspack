import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {MaterialStorage} from "../../models/MaterialStorage";
import {MaterialStorageService} from "../../services/material-storage.service";

@Component({
  selector: 'app-material-storage-list',
  templateUrl: './material-storage-list.component.html',
  styleUrls: ['./material-storage-list.component.css']
})
export class MaterialStorageListComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('successDialogDelete') successDialogDelete: TemplateRef<any>;
  @ViewChild('failedDialogDelete') failedDialogDelete: TemplateRef<any>;

  materialstorage:MaterialStorage[];
  dataSource=[];
  tableColumns:string[] = ['name', 'liquid', 'mass', '_id'];
  constructor(private service:MaterialStorageService, public dialog: MatDialog) { }

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

  deleteData(data:MaterialStorage) {
    try {
      this.service.deleteData(data).subscribe(result => {
        window.location.reload();
      });
    } catch (e) {
      console.log(e)
    }
  }
}
