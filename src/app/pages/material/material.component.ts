import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Material} from "../../models/Material";
import {MaterialService} from "../../services/material.service";

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  @ViewChild('successDialog') successDialog: TemplateRef<any>;
  @ViewChild('failedDialog') failedDialog: TemplateRef<any>;

  materials:Material[]=[];
  constructor(private service:MaterialService, public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  addData(data:Material) {
    try {
      this.service.postData(data).subscribe(data => {
        this.materials.push(data);
        this.dialog.open(this.successDialog);
        window.location.reload();
      })
    } catch (e) {
      console.log("Failed: " + data);
      this.dialog.open(this.failedDialog);
    }
  }
}
