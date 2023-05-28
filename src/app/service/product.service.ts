import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Iproduct } from '../interface/Iproduct';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  getAllProduct(): Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>("http://localhost:3000/product")
  }
  getOneProduct(id: number): Observable<Iproduct>{
    return this.http.get<Iproduct>(`http://localhost:3000/product/${id}`)
  }
  deleteProduct(id: number): Observable<Iproduct>{
    return this.http.delete<Iproduct>(`http://localhost:3000/product/${id}`)
  }
  addProduct(product: Iproduct): Observable<Iproduct>{
    return this.http.post<Iproduct>("http://localhost:3000/product", product)
  }
  editProduct(product: Iproduct): Observable<Iproduct>{
    return this.http.put<Iproduct>(`http://localhost:3000/product/${product.id}`, product)
  }
}
