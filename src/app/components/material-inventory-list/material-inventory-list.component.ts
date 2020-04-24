import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {MaterialInventory} from "../../models/MaterialInventory";
import {MaterialInventoryService} from "../../services/material-inventory.service";

@Component({
  selector: 'app-material-inventory-list',
  templateUrl: './material-inventory-list.component.html',
  styleUrls: ['./material-inventory-list.component.css']
})
export class MaterialInventoryListComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('successDialogDelete') successDialogDelete: TemplateRef<any>;
  @ViewChild('failedDialogDelete') failedDialogDelete: TemplateRef<any>;

  datas:MaterialInventory[];
  dataSource=[];
  tableColumns:string[] = ['material_id', 'storage_id', 'in', 'quantity', '_id'];
  constructor(private service:MaterialInventoryService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(result => {
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

  deleteData(data:MaterialInventory) {
    try {
      this.service.deleteData(data).subscribe(result => {
        window.location.reload();
      });
    } catch (e) {
      console.log(e)
    }
  }
}
