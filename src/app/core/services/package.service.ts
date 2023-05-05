import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http: HttpClient) { }

  dbUrl = "http://localhost:3000"

  getAllRecords(path:any){
    return this.http.get(`${this.dbUrl}/${path}`)
  }

  getRecordById(path:any, id:any){
    return this.http.get(`${this.dbUrl}/${path}/${id}`)
  }

  addRecord(path:any, obj:any){
    return this.http.post(`${this.dbUrl}/${path}`,obj)
  }

  updateRecord(path:any, data:any){
    return this.http.put(`${this.dbUrl}/${path}/${data.id}`, data)
  }

  deleteRecord(path:any,id:any){
    return this.http.delete(`${this.dbUrl}/${path}/${id}`)
  }
}
