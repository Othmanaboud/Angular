import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Boat } from '../Boat';

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  public baseURL="http://localhost:8080/boat";

  constructor(private http: HttpClient) { }

  getBoats() {
    return this.http.get<any[]>("http://localhost:8080/boats");
  }

  
  getBoatByID(id:number) {
    return this.http.get<Boat>(`${this.baseURL}/${id}`);
  }

  
  saveNewBoat(data:any) {
    return this.http.post("http://localhost:8080/addBoat",data);
  }

  updateBoat(id: any, data: any) {
    return this.http.put(`http://localhost:8080/update/${id}`, data);
  }
  
  deleteBoat(id: number) {
    return this.http.delete(`http://localhost:8080/delete/${id}`);
  }



}
