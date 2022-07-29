import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

   token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set("Authorization", environment.token)
    }
  }

  cadastrar(usu: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('usuarios/cadastrar', usu)
  }

  entrar(usuLogin: UsuarioLogin):Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('usuarios/logar', usuLogin)
  }

  encontrarCorretorId(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`usuarios/${id}`, this.token)
  }


  logado(){
    let ok = false
    if(environment.token != ''){
      ok = true
    }

    return ok
  }
}
