import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

public baseURL = "http://localhost:8080/getProduct"
  getProducts(){
    return this.http.get<any[]>("http://localhost:8080/Products", )
  }

  saveProduct(data: any){
    return this.http.post<Product>("http://localhost:8080/addProduct/",data)
  }

  getProductById(id: number){
    return this.http.get<Product>(`${this.baseURL}/${id} `)
  }

  updteProduct( data: any){
    return this.http.put("http://localhost:8080/updateProduct",data)
  }

  deleteProduct(id: number){
    return this.http.delete(`http://localhost:8080/deleteProduct/${id}`);

  }
}
