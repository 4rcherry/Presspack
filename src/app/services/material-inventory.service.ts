import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {MaterialInventory} from "../models/MaterialInventory";

const url = environment.epMaterialInventory;
const httpOptions = {
  headers: new HttpHeaders({
      "Content-Type": "application/json",
    }
  )
};
@Injectable({
  providedIn: 'root'
})
export class MaterialInventoryService {
  constructor(private http:HttpClient) { }

  getAll():Observable<MaterialInventory[]> {
    return this.http.get<MaterialInventory[]>(url)
  }

  getView(id):Observable<MaterialInventory[]> {
    return this.http.get<MaterialInventory[]>(url + id)
  }

  postData(data:MaterialInventory):Observable<MaterialInventory> {
    return this.http.post<MaterialInventory>(url, data, httpOptions)
  }

  patchData(data:MaterialInventory):Observable<MaterialInventory> {
    return this.http.patch<MaterialInventory>(url + data._id, data, httpOptions)
  }

  deleteData(data:MaterialInventory):Observable<MaterialInventory> {
    return this.http.delete<MaterialInventory>(url + data._id, httpOptions)
  }
}
