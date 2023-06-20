import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { Cliente } from '../../model/Cliente';
import { Veiculo } from '../../model/Veiculo';
import { environment } from 'src/environments/environment.prod';
import { VeiculoService } from '../../service/veiculo.service';
import { ClienteService } from '../../service/cliente.service';
import { TiposVeiculosService } from '../../service/tipos-veiculos.service';
import { TiposVeiculos } from '../../model/TiposVeiculos';
import { Usuario } from '../../model/Usuario';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {
  cliente: Cliente = new Cliente()
  idCliente: number
  listaClientes: Cliente[]

  usuario:Usuario = new Usuario()
  idUsuario = environment.id

  constructor(
    private authService: AuthService,
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      // alert('Sua seção expirou, faça o login novamente');
      this.router.navigate(['/entrar']);
    }
  }

  encontrarCorretorId(id:number){
    this.authService.encontrarCorretorId(id).subscribe({
      next: (resp:Usuario) => {
        this.usuario = resp
      }
    })
  }


  cadastrarCliente() {

    this.encontrarCorretorId(this.idUsuario)

    this.usuario.id = this.idUsuario
    this.cliente.usuario = this.usuario

    this.clienteService.postClientes(this.cliente).subscribe({
      next: (resp: Cliente) => {
        this.cliente = resp
        alert('cliente cadastrado')
        this.router.navigate(["/cadastrarveiculo"])

      }
    })
  }

}
