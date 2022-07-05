import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { Cliente } from '../model/Cliente';
import { Veiculo } from '../model/Veiculo';
import { environment } from 'src/environments/environment.prod';
import { VeiculoService } from '../service/veiculo.service';
import { ClienteService } from '../service/cliente.service';
import { TiposVeiculosService } from '../service/tipos-veiculos.service';
import { TiposVeiculos } from '../model/TiposVeiculos';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {
  idCliente: number
  cliente: Cliente = new Cliente()
  listaClientes: Cliente[]

  idUsuario = environment.id

  veiculo: Veiculo = new Veiculo()
  listaVeiculos: Veiculo[]

  idTipoVeiculo: number
  listaTiposVeiculos: TiposVeiculos[]
  tipoVeiculo: TiposVeiculos

  constructor(
    private authService: AuthService,
    private veiculoService: VeiculoService,
    private clienteService: ClienteService,
    private tiposVeiculosService: TiposVeiculosService,
    private router: Router
  ) { }

  ngOnInit(){

     if (environment.token == '') {
      // alert('Sua seção expirou, faça o login novamente');
      this.router.navigate(['/entrar']);
    }

    this.trazerTodosClientes()
    this.trazerTodosOsTiposVeiculos()
    this.encontrarTipoVeiculoPorId()
  }

  trazerTodosClientes(){
    this.clienteService.getAllClientes().subscribe((resp:Cliente[]) => {
        this.listaClientes = resp
      })
  }

  trazerTodosOsTiposVeiculos(){
    this.tiposVeiculosService.getAllTiposVeiculos().subscribe((resp:TiposVeiculos[]) => {
      this.listaTiposVeiculos = resp
    })
  }

  encontrarTipoVeiculoPorId(){
    this.tiposVeiculosService.getTipoVeiculoById(this.idTipoVeiculo).subscribe(
      {
        next: (resp:TiposVeiculos) => {
          this.tipoVeiculo = resp
          console.table(this.tipoVeiculo)
        }
      })
  }



  cadastrar(){


this.tipoVeiculo.id_tipoVeiculo = this. idTipoVeiculo
this.veiculo.tiposVeiculos = this.tipoVeiculo

    this.clienteService.postClientes(this.cliente).subscribe({
      next: (resp: Cliente) => {
        this.cliente = resp
        alert('certo')

      }
      })
      this.veiculo.cliente = this.cliente
      this.veiculoService.postVeiculos(this.veiculo).subscribe({
        next: (resp:Veiculo) => {
          this.veiculo = resp
          alert('certo')
        }
      })
  }
}
