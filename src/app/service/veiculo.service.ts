import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veiculo } from '../model/Veiculo';
import { TiposVeiculos } from '../model/TiposVeiculos';

import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  getAllVeiculos(): Observable<Veiculo[]>{
    return this.http.get<Veiculo[]>('veiculos', this.token)
  }

  getByIdVeiculos(id: number): Observable<Veiculo>{
    return this.http.get<Veiculo>(`veiculos/${id}`, this.token)
  }

  postVeiculos(veiculo: Veiculo): Observable<Veiculo>{
    return this.http.post<Veiculo>('veiculos',veiculo, this.token)
  }

  putVeiculos(veiculo: Veiculo): Observable<Veiculo>{
    return this.http.put<Veiculo>('veiculos',veiculo, this.token)
  }

  deleteVeiculo(id:number){
    return this.http.delete(`veiculos/${id}`, this.token)
  }


}
