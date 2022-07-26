import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../../model/Veiculo';
import { TiposVeiculos } from '../../model/TiposVeiculos';
import { Cliente } from '../../model/Cliente';
import { TiposVeiculosService } from '../../service/tipos-veiculos.service';
import { ClienteService } from '../../service/cliente.service';
import { VeiculoService } from '../../service/veiculo.service';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-editar-veiculo',
  templateUrl: './editar-veiculo.component.html',
  styleUrls: ['./editar-veiculo.component.css']
})
export class EditarVeiculoComponent implements OnInit {
  veiculo: Veiculo = new Veiculo()
  listaVeiculos: Veiculo[]

  idTipoVeiculo: number
  listaTiposVeiculos: TiposVeiculos[]
  tipoVeiculo: TiposVeiculos

  listaClientes: Cliente[]
  cliente: Cliente = new Cliente()
  idVeiculo: number


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

    this.idVeiculo = this.route.snapshot.params['id']
    this.trazerTodosOsTiposVeiculos()
    this.encontrarTipoVeiculoPorId()
    this.encontrarVeiculoPorId()
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

  encontrarVeiculoPorId(){
    this.veiculoService.getByIdVeiculos(this.idVeiculo).subscribe({
      next: (resp: Veiculo) => {
        this.veiculo = resp
      }
    })
  }

  atualizar(){
      this.veiculoService.putVeiculos(this.veiculo).subscribe({
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
