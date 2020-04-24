import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MaterialStorage} from "../../models/MaterialStorage";
import {MaterialStorageService} from "../../services/material-storage.service";

@Component({
  selector: 'app-material-storage',
  templateUrl: './material-storage.component.html',
  styleUrls: ['./material-storage.component.css']
})
export class MaterialStorageComponent implements OnInit {
  @ViewChild('successDialog') successDialog: TemplateRef<any>;
  @ViewChild('failedDialog') failedDialog: TemplateRef<any>;

  materialStorages:MaterialStorage[]=[];
  constructor(private service:MaterialStorageService, public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  addData(data:MaterialStorage) {
    try {
      this.service.postData(data).subscribe(data => {
        this.materialStorages.push(data);
        this.dialog.open(this.successDialog);
        window.location.reload();
      })
    } catch (e) {
      console.log("Failed: " + data);
      this.dialog.open(this.failedDialog);
    }
  }
}
