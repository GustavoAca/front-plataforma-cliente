import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  getAllClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('clientes', this.token)
  }

  getClienteById(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`clientes/${id}`, this.token)
  }

  getByName(nome: string): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`clientes/nome/${nome}`, this.token)
  }

  postClientes(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>('clientes',cliente, this.token)
  }

  putClientes(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>('clientes',cliente, this.token)
  }

  deleteCliente(id:number){
    return this.http.delete(`clientes/${id}`, this.token)
  }
}
