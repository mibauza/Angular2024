import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { pcModel } from './models/pc-model/pc-model';

@Injectable({
  providedIn: 'root'
})

export class PcServiceService {

  private url = "https://fakestoreapi.com/products";

  constructor(private _http: HttpClient) { }

  public getProductos(): Observable<pcModel[]> {
    console.log("getProductos service");
    return this._http.get<pcModel[]>(this.url);
  }
}