import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {MaterialStorage} from "../models/MaterialStorage";

const url = environment.epMaterialStorage;
const httpOptions = {
  headers: new HttpHeaders({
      "Content-Type": "application/json",
    }
  )
};
@Injectable({
  providedIn: 'root'
})
export class MaterialStorageService {

  constructor(private http:HttpClient) { }

  getAll():Observable<MaterialStorage[]> {
    return this.http.get<MaterialStorage[]>(url)
  }

  getView(id):Observable<MaterialStorage[]> {
    return this.http.get<MaterialStorage[]>(url + id)
  }

  postData(data:MaterialStorage):Observable<MaterialStorage> {
    return this.http.post<MaterialStorage>(url, data, httpOptions)
  }

  patchData(data:MaterialStorage):Observable<MaterialStorage> {
    return this.http.patch<MaterialStorage>(url + data._id, data, httpOptions)
  }

  deleteData(data:MaterialStorage):Observable<MaterialStorage> {
    return this.http.delete<MaterialStorage>(url + data._id, httpOptions)
  }
}
