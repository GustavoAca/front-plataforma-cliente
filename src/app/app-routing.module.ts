import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastros/cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { CadastrarClienteComponent } from './cadastros/cadastrar-cliente/cadastrar-cliente.component';
import { InfogeraisComponent } from './infogerais/infogerais.component';
import { ClienteComponent } from './excluir/cliente/cliente.component';
import { CadastrarCarroClienteExistenteComponent } from './cadastros/cadastrar-carro-cliente-existente/cadastrar-carro-cliente-existente.component';
import { EditarClienteComponent } from './editar/editar-cliente/editar-cliente.component';
import { EditarVeiculoComponent } from './editar/editar-veiculo/editar-veiculo.component';


const routes: Routes = [
  { path: '', redirectTo: 'entrar', pathMatch: 'full' },

  { path: 'entrar', component: EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent },

  { path: 'inicio', component: InicioComponent},

  { path: 'cadastrarcliente', component: CadastrarClienteComponent},

  { path: 'infogerais/:id', component: InfogeraisComponent},

  { path: 'excluir-cliente/:id', component: ClienteComponent},

  { path: 'editar-cliente/:id', component: EditarClienteComponent},
  { path: 'editar-veiculo/:id', component: EditarVeiculoComponent},


  { path: 'cadastrar-carro-cliente-cadastrado/:id', component: CadastrarCarroClienteExistenteComponent},
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
