import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MaterialService} from "../../services/material.service";
import {Material} from "../../models/Material";
import {MaterialStorage} from "../../models/MaterialStorage";
import {MaterialStorageService} from "../../services/material-storage.service";

@Component({
  selector: 'app-material-inventory-add',
  templateUrl: './material-inventory-add.component.html',
  styleUrls: ['./material-inventory-add.component.css']
})
export class MaterialInventoryAddComponent implements OnInit {
  @Output()addData:EventEmitter<any> = new EventEmitter();

  materials:Material[];
  storages:MaterialStorage[];
  material_id:String;
  storage_id:String;
  quantity:Number;
  in:Boolean;

  constructor(
    private serviceMaterial:MaterialService,
    private serviceStorage:MaterialStorageService,
    public dialog:MatDialog) {}

  ngOnInit(): void {
    this.serviceMaterial.getAll().subscribe(result => {
      this.materials = result
    });
    this.serviceStorage.getAll().subscribe(result => {
      this.storages = result
    })
  }

  onSubmit() {
    const data = {
      material_id:  this.material_id,
      storage_id: this.storage_id,
      quantity:     this.quantity,
      in:           this.in
    };
    this.addData.emit(data);
    console.log(data);
  }
}
