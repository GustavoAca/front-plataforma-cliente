import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { Cliente } from '../model/Cliente';
import { ClienteService } from '../service/cliente.service';
import { Veiculo } from '../model/Veiculo';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  cliente: Cliente = new Cliente()
  listaClientes: Cliente[]
  nomeCliente: string

  usuario: Usuario = new Usuario()
  idUsuario = environment.id

  veiculo: Veiculo = new Veiculo

  constructor(
    private clienteService: ClienteService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      // alert('Sua seção expirou, faça o login novamente');
      this.router.navigate(['/entrar']);
    }

    this.trazerTodosClientes()


  }

  trazerTodosClientes() {
    this.clienteService.getAllClientes().subscribe({
      next: (resp: Cliente[]) => {
        this.listaClientes = resp
      }
    })
  }

  trazerPorNome() {
    this.nomeCliente == '' ? this.trazerTodosClientes() : this.clienteService.getByName(this.nomeCliente).subscribe({
      next: (resp: Cliente[]) => {
        this.listaClientes = resp

      }
    })
  }

  trazerCorretorPorId(id: number) {
    this.authService.encontrarCorretorId(id).subscribe({
      next: (resp: Usuario) => {
        this.usuario = resp
      }
    })
  }



}






