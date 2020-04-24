import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MaterialInventory} from "../../models/MaterialInventory";
import {MaterialInventoryService} from "../../services/material-inventory.service";

@Component({
  selector: 'app-material-inventory',
  templateUrl: './material-inventory.component.html',
  styleUrls: ['./material-inventory.component.css']
})
export class MaterialInventoryComponent implements OnInit {
  @ViewChild('successDialog') successDialog: TemplateRef<any>;
  @ViewChild('failedDialog') failedDialog: TemplateRef<any>;

  datas:MaterialInventory[]=[];
  constructor(private service:MaterialInventoryService, public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  addData(data:MaterialInventory) {
    try {
      this.service.postData(data).subscribe(data => {
        this.datas.push(data);
        this.dialog.open(this.successDialog);
        window.location.reload();
      })
    } catch (e) {
      console.log("Failed: " + data);
      this.dialog.open(this.failedDialog);
    }
  }
}
