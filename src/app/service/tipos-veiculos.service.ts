import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TiposVeiculos } from '../model/TiposVeiculos';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TiposVeiculosService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }
  getAllTiposVeiculos(): Observable<TiposVeiculos[]> {
    return this.http.get<TiposVeiculos[]>('tiposVeiculos', this.token)

  }

  getTipoVeiculoById(id: number): Observable<TiposVeiculos>{
    return this.http.get<TiposVeiculos>(`tiposVeiculos/${id}`, this.token)
  }
}
