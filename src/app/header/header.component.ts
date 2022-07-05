import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nome = environment.nome
  foto = environment.foto

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  sair(){
    this.router.navigate(['/entrar'])

    environment.token = '';
    environment.id = 0;
    environment.foto = '';
    environment.senha = '';
  }

}
