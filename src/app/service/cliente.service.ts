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
    return this.http.get<Cliente[]>('https://apibemprotege.herokuapp.com/clientes', this.token)
  }

  getClienteById(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`https://apibemprotege.herokuapp.com/clientes/${id}`, this.token)
  }

  getByName(nome: string): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`https://apibemprotege.herokuapp.com/clientes/nome/${nome}`, this.token)
  }

  postClientes(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>('https://apibemprotege.herokuapp.com/clientes',cliente, this.token)
  }

  putClientes(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>('https://apibemprotege.herokuapp.com/clientes',cliente, this.token)
  }

  deleteCliente(id:number){
    return this.http.delete(`https://apibemprotege.herokuapp.com/clientes/${id}`, this.token)
  }
}
