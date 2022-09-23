import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Liencense } from '../Liecense';

@Injectable({
  providedIn: 'root'
})
export class LiecenseService {
public baseURL ="http://localhost:8080/getLiecense";

  constructor(private http: HttpClient) { }

  getLicense() {
    return this.http.get<any[]>("http://localhost:8080/liencense");
  }

  saveLicense(data:any) {
    return this.http.post("http://localhost:8080/addLiencense",data);
  }

  getLicenseByID(id:number) {
    return this.http.get<Liencense>(`${this.baseURL}/${id}`);
  }

  updateLicense(id: any, data: any) {
    return this.http.put(`http://localhost:8080/updateLience/${id}`, data);
  }

  deleteLicense(id: number) {
    return this.http.delete(`http://localhost:8080/deleteLiecense/${id}`);
  }


}
