import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MaterialStorage} from "../../models/MaterialStorage";

@Component({
  selector: 'app-material-storage-add',
  templateUrl: './material-storage-add.component.html',
  styleUrls: ['./material-storage-add.component.css']
})
export class MaterialStorageAddComponent implements OnInit {
  @Output()addData:EventEmitter<any> = new EventEmitter();

  materialStorages:MaterialStorage[];
  name:String;
  liquid:Number;
  mass:Number;

  constructor(public dialog:MatDialog) {}

  ngOnInit(): void {
  }

  onSubmit() {
    const data = {
      name:   this.name,
      liquid: this.liquid,
      mass:   this.mass
    };
    this.addData.emit(data);
    console.log(data);
  }
}
