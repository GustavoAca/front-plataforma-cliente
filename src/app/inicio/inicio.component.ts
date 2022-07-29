import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { Cliente } from '../model/Cliente';
import { ClienteService } from '../service/cliente.service';
import { Veiculo } from '../model/Veiculo';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { VeiculoService } from '../service/veiculo.service';


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
  listaClientesDiaDez: Veiculo[]
  listaClientesDiaQuienze: Veiculo[]
  listaClientesDiaVinte: Veiculo[]

  constructor(
    private clienteService: ClienteService,
    private veiculoService: VeiculoService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      // alert('Sua seção expirou, faça o login novamente');
      this.router.navigate(['/entrar']);
    }
    this.authService.refreshToken()
    this.trazerclientesDoCorretorPorId(this.idUsuario)


  }

  ativarFuncao() {
    this.trazerPorNome(this.usuario)
  }

  trazerPorNome(usuario: Usuario) {
    this.nomeCliente == '' ? this.trazerclientesDoCorretorPorId(this.idUsuario) : this.clienteService.getByName(this.nomeCliente).subscribe({
      next: (resp: Cliente[]) => {
        this.listaClientes = resp.filter(function (cli) {
          return cli.usuario.id === usuario.id
        })
      }
    })
  }

  trazerclientesDoCorretorPorId(id: number) {
    this.authService.encontrarCorretorId(id).subscribe({
      next: (resp: Usuario) => {
        this.usuario = resp
        this.listaClientes = this.usuario.cliente
      }
    })
  }

  trazerDiaDez() {
    this.veiculoService.getAllVeiculos().subscribe({
      next: (resp: Veiculo[]) => {
        this.listaClientesDiaDez = resp.filter(function (vei) {
          return vei.vencimentoBoleto == '10'
        })
      }
    })
  }

  trazerDiaQuinze() {
    this.veiculoService.getAllVeiculos().subscribe({
      next: (resp: Veiculo[]) => {
        this.listaClientesDiaQuienze = resp.filter(function (vei) {
          return vei.vencimentoBoleto == '15'
        })
      }
    })

  }

  trazerDiaVinte() {

    this.veiculoService.getAllVeiculos().subscribe({
      next: (resp: Veiculo[]) => {
        this.listaClientesDiaVinte = resp.filter(function (vei) {
          return vei.vencimentoBoleto == '20'
        })
      }
    })
  }

}






