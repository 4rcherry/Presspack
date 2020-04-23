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

  postData(name, product, address) {
    const data:FormData = new FormData();
    data.append('name', name);
    data.append('product', product);
    data.append('address', address);
    return this.http.post(url, data)
  }

  patchData(data:Supplier):Observable<Supplier> {
    return this.http.patch<Supplier>(url + data._id, data, httpOptions)
  }

  deleteData(data:Supplier):Observable<Supplier> {
    return this.http.delete<Supplier>(url + data._id, httpOptions)
  }
}
