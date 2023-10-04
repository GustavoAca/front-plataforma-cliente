import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/Cliente';
import { ClienteService } from '../../service/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Veiculo } from '../../model/Veiculo';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  cliente:Cliente = new Cliente()
  idCliente: number
  numCarros: number

  veiculo: Veiculo = new Veiculo()

  constructor(private clienteService: ClienteService,
    public route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    if (environment.token == '') {
      // alert('Sua seção expirou, faça o login novamente');
      this.router.navigate(['/entrar']);
    }

    this.idCliente = this.route.snapshot.params['id']
    this.findByIdUser()
  }

  findByIdUser(){
    this.clienteService.getClienteById(this.idCliente).subscribe({
      next: (resp: Cliente) => {
          this.cliente = resp
          this.contagemDeCarros()
      }
    })
  }

  contagemDeCarros(){
    this.numCarros = this.cliente.veiculo.length
  }

  apagar(){
    this.clienteService.deleteCliente(this.idCliente).subscribe(() => {
      alert("Cliente apagado")
      this.router.navigate(["/inicio"])
    })

  }


}
