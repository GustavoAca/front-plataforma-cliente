import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../model/Usuario';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario()
  confirmarSenha: string

  constructor(
    private authService: AuthService,
    private router: Router
      ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  conferirSenha(event:any){
    this.confirmarSenha = event.target.value
  }

  cadastrar(){
    this.usuario.senha != this.confirmarSenha ? alert('Senha estão incorretas') : this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) =>{
      this.usuario = resp

      this.router.navigate(['/entrar'])
      alert('Usuario cadastrado com sucesso!')
    })
  }



}
