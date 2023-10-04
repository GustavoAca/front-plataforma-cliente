import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/Cliente';
import { Usuario } from '../../model/Usuario';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../../service/auth.service';
import { ClienteService } from '../../service/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente: Cliente = new Cliente()
  idCliente: number
  listaClientes: Cliente[]

  usuario:Usuario = new Usuario()
  idUsuario = environment.id

  constructor(
    private authService: AuthService,
    private clienteService: ClienteService,
    public route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      // alert('Sua seção expirou, faça o login novamente');
      this.router.navigate(['/entrar']);
    }
    this.idCliente = this.route.snapshot.params['id']
    this.encontrarClienteId()
  }

  encontrarClienteId(){
    this.clienteService.getClienteById(this.idCliente).subscribe({
      next: (resp: Cliente ) => {
        this.cliente = resp
      }
    })
  }

  atualizarCliente(){
      this.clienteService.putClientes(this.cliente).subscribe({
        next: (resp: Cliente) => {
          this.cliente = resp
          alert('Cliente atualizado')
          this.router.navigate(['/inicio'])
        }
      })
  }

}
