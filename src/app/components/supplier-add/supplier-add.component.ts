import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ConfirmationComponent} from "../../parts/confirmation/confirmation.component";
import {MatDialog} from "@angular/material/dialog";
import {SupplierService} from "../../services/supplier.service";

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.css']
})
export class SupplierAddComponent implements OnInit {
  @ViewChild('successDialog') successDialog: TemplateRef<any>;
  @ViewChild('failedDialog') failedDialog: TemplateRef<any>;

  name:String;
  product:String;
  address:String;

  constructor(private service:SupplierService,public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit() {
    try {
      this.service.postData(this.name, this.product, this.address).subscribe(result => {
        this.name     = null;
        this.product  = null;
        this.address  = null;
        this.dialog.open(this.successDialog);
      })
    } catch (e) {
      console.log(e);
      this.dialog.open(this.failedDialog);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '350px',
      data: "Are you sure to confirm add Supplier data?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.onSubmit()
      }
    });
  }

}
