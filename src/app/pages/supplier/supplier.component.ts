import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {SupplierService} from "../../services/supplier.service";
import {Supplier} from "../../models/Supplier";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  @ViewChild('successDialog') successDialog: TemplateRef<any>;
  @ViewChild('failedDialog') failedDialog: TemplateRef<any>;

  suppliers:Supplier[]=[];
  constructor(private service:SupplierService, public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  addData(data:Supplier) {
    try {
      this.service.postData(data).subscribe(data => {
        this.suppliers.push(data);
        this.dialog.open(this.successDialog);
        window.location.reload();
      })
    } catch (e) {
      console.log("Failed: " + data);
      this.dialog.open(this.failedDialog);
    }
  }
}
