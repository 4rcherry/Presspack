import {Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {ConfirmationComponent} from "../../parts/confirmation/confirmation.component";
import {MatDialog} from "@angular/material/dialog";
import {SupplierService} from "../../services/supplier.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.css']
})
export class SupplierAddComponent implements OnInit {
  @Output()addData:EventEmitter<any> = new EventEmitter();

  name:String;
  product:String;
  address:String;

  constructor(public dialog:MatDialog) {}

  ngOnInit(): void {
  }

  onSubmit() {
    const data = {
      name: this.name,
      product: this.product,
      address: this.address
    };
    this.addData.emit(data)
  }

}
