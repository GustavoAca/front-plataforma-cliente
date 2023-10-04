import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../model/Veiculo';
import { Cliente } from '../model/Cliente';
import { environment } from 'src/environments/environment.prod';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-infogerais',
  templateUrl: './infogerais.component.html',
  styleUrls: ['./infogerais.component.css']
})
export class InfogeraisComponent implements OnInit {

  listaCarrosCliente: Veiculo[]

  cliente: Cliente = new Cliente()
  idCliente: number

  veiculo: Veiculo = new Veiculo()


  constructor(
    public route: ActivatedRoute,
    private clienteService: ClienteService,
    private router: Router
  ) { }

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
    }
  })
}


}
