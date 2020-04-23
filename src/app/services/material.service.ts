import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Material} from "../models/Material";

const url = environment.epMaterial;
const httpOptions = {
  headers: new HttpHeaders({
      "Content-Type": "application/json",
    }
  )
};
@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Material[]> {
    return this.http.get<Material[]>(url)
  }

  getView(id):Observable<Material[]> {
    return this.http.get<Material[]>(url + id)
  }

  postData(supplier_id, name, unit, price) {
    const data:FormData = new FormData();
    data.append('supplier_id', supplier_id);
    data.append('name', name);
    data.append('unit', unit);
    data.append('price', price);
    return this.http.post(url, data)
  }

  patchData(data:Material):Observable<Material> {
    return this.http.patch<Material>(url + data._id, data, httpOptions)
  }

  deleteData(data:Material):Observable<Material> {
    return this.http.delete<Material>(url + data._id, httpOptions)
  }
}
