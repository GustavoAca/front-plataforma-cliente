import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../../model/Veiculo';
import { TiposVeiculos } from '../../model/TiposVeiculos';
import { Cliente } from '../../model/Cliente';
import { TiposVeiculosService } from '../../service/tipos-veiculos.service';
import { AuthService } from '../../service/auth.service';
import { VeiculoService } from '../../service/veiculo.service';
import { ClienteService } from '../../service/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cadastrar-carro-cliente-existente',
  templateUrl: './cadastrar-carro-cliente-existente.component.html',
  styleUrls: ['./cadastrar-carro-cliente-existente.component.css']
})
export class CadastrarCarroClienteExistenteComponent implements OnInit {

  veiculo: Veiculo = new Veiculo()
  listaVeiculos: Veiculo[]

  idTipoVeiculo: number
  listaTiposVeiculos: TiposVeiculos[]
  tipoVeiculo: TiposVeiculos

  listaClientes: Cliente[]
  cliente: Cliente = new Cliente()
  idCliente: number


  constructor(
    private tiposVeiculosService: TiposVeiculosService,
    private authService: AuthService,
    private veiculoService: VeiculoService,
    private clienteService: ClienteService,
    public route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(){
    if (environment.token == '') {
      // alert('Sua seção expirou, faça o login novamente');
      this.router.navigate(['/entrar']);
    }

    this.trazerTodosOsTiposVeiculos()
    this.idCliente = this.route.snapshot.params['id']
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

    encontrarClientePorId(){
      this.clienteService.getClienteById(this.idCliente).subscribe({
        next: (resp:Cliente) => {
          this.cliente  = resp
        }
      })
    }

    cadastrarVeiculo() {
      this.tipoVeiculo.id_tipoVeiculo = this.idTipoVeiculo
      this.veiculo.tiposVeiculos = this.tipoVeiculo

      this.cliente.id_cliente = this.idCliente
      this.veiculo.cliente = this.cliente
      console.log('linha 86')

      this.veiculoService.postVeiculos(this.veiculo).subscribe({
        next: (resp: Veiculo) => {
          this.veiculo = resp
          console.table(this.veiculo)
          alert('Veiculo cadastrado')
          this.router.navigate(['/inicio'])
          this.veiculo = new Veiculo()
        }
      })
    }
}
