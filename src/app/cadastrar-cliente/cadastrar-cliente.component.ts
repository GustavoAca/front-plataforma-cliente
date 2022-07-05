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
  cliente: Cliente = new Cliente()
  idCliente: number
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

  ngOnInit() {

    if (environment.token == '') {
      // alert('Sua seção expirou, faça o login novamente');
      this.router.navigate(['/entrar']);
    }

    this.trazerTodosOsTiposVeiculos()
    this.encontrarTipoVeiculoPorId()
  }


  trazerTodosOsTiposVeiculos() {
    this.tiposVeiculosService.getAllTiposVeiculos().subscribe((resp: TiposVeiculos[]) => {
      this.listaTiposVeiculos = resp
    })
  }

  encontrarTipoVeiculoPorId() {
    this.tiposVeiculosService.getTipoVeiculoById(this.idTipoVeiculo).subscribe(
      {
        next: (resp: TiposVeiculos) => {
          this.tipoVeiculo = resp

        }
      })
  }

  encontrarClientePorId(id:number) {
    this.clienteService.getClienteById(id).subscribe(
      {
        next: (resp: Cliente) => {
          this.cliente = resp
        alert('certo encontrado')

        }
      })
  }

  cadastrarCliente() {

    this.clienteService.postClientes(this.cliente).subscribe({
      next: (resp: Cliente) => {
        this.cliente = resp
        this.idCliente = this.cliente.id_cliente
        alert('certo cliente')
        this.encontrarClientePorId(this.idCliente)


      }
    })
  }


  cadastrarVeiculo(cliente:Cliente) {

    this.tipoVeiculo.id_tipoVeiculo = this.idTipoVeiculo
    this.veiculo.tiposVeiculos = this.tipoVeiculo

    this.veiculo.cliente = this.cliente

    this.veiculoService.postVeiculos(this.veiculo).subscribe({
      next: (resp: Veiculo) => {
        this.veiculo = resp
        console.table(this.veiculo)
        alert('certo veiculo')
      }
    })
  }

  cadastrar() {
    this.cadastrarCliente()
    this.cadastrarVeiculo(this.cliente)
  }
}
