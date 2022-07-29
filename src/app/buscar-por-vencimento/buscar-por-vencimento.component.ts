import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../model/Veiculo';
import { ClienteService } from '../service/cliente.service';
import { AuthService } from '../service/auth.service';
import { VeiculoService } from '../service/veiculo.service';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';
import { Cliente } from '../model/Cliente';
import { of } from 'rxjs';

@Component({
  selector: 'app-buscar-por-vencimento',
  templateUrl: './buscar-por-vencimento.component.html',
  styleUrls: ['./buscar-por-vencimento.component.css']
})
export class BuscarPorVencimentoComponent implements OnInit {

  idUsuario = environment.id
  cliente: Cliente = new Cliente()
  listaClientes: Cliente[]
  nomeCliente: string

  veiculo: Veiculo = new Veiculo

  listaClientesDoDia: Veiculo[]
  listaVeiculosD: Veiculo[]
  listaVeiculosQ: Veiculo[]
  listaVeiculosV: Veiculo[]

  usuario:Usuario = new Usuario()

  constructor(private clienteService: ClienteService,
    private authService: AuthService,
    private veiculoService: VeiculoService,
    private router: Router) { }

  ngOnInit() {
    if (environment.token == '') {
      // alert('Sua seção expirou, faça o login novamente');
      this.router.navigate(['/entrar']);
    }

    this.trazerclientesDoCorretorPorId(this.idUsuario)
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
        this.listaClientesDoDia = resp.filter(function (vei) {
          return vei.vencimentoBoleto == '10'
        })
      }
    })
  }

  trazerDiaQuinze() {
    this.veiculoService.getAllVeiculos().subscribe({
      next: (resp: Veiculo[]) => {
        this.listaClientesDoDia = resp.filter(function (vei) {
          return vei.vencimentoBoleto == '15'
        })
      }
    })

  }

  trazerDiaVinte() {

    this.veiculoService.getAllVeiculos().subscribe({
      next: (resp: Veiculo[]) => {
        this.listaClientesDoDia = resp.filter(function (vei) {
          return vei.vencimentoBoleto == '20'
        })
      }
    })
  }

}
