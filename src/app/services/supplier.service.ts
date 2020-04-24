import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Supplier} from "../models/Supplier";
import {environment} from "../../environments/environment";

const url = environment.epSupplier;
const httpOptions = {
  headers: new HttpHeaders({
      "Content-Type": "application/json",
    }
  )
};
@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Supplier[]> {
    return this.http.get<Supplier[]>(url)
  }

  getView(id):Observable<Supplier[]> {
    return this.http.get<Supplier[]>(url + id)
  }

  postData(data:Supplier):Observable<Supplier> {
    return this.http.post<Supplier>(url, data, httpOptions)
  }

  patchData(data:Supplier):Observable<Supplier> {
    return this.http.patch<Supplier>(url + data._id, data, httpOptions)
  }

  deleteData(data:Supplier):Observable<Supplier> {
    return this.http.delete<Supplier>(url + data._id, httpOptions)
  }
}
