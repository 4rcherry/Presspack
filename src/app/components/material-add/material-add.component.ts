import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SupplierService} from "../../services/supplier.service";
import {Supplier} from "../../models/Supplier";

@Component({
  selector: 'app-material-add',
  templateUrl: './material-add.component.html',
  styleUrls: ['./material-add.component.css']
})
export class MaterialAddComponent implements OnInit {
  @Output()addData:EventEmitter<any> = new EventEmitter();

  suppliers:Supplier[];
  supplier_id:String;
  name:String;
  unit:Number;
  price:Number;

  constructor(private serviceSupplier:SupplierService,public dialog:MatDialog) {}

  ngOnInit(): void {
    this.serviceSupplier.getAll().subscribe(suppliers => {
      this.suppliers = suppliers
    })
  }

  onSubmit() {
    const data = {
      supplier_id:  this.supplier_id,
      name:         this.name,
      unit:         this.unit,
      price:        this.price
    };
    this.addData.emit(data);
    console.log(data);
  }
}
