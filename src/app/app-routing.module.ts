import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastros/cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { CadastrarClienteComponent } from './cadastros/cadastrar-cliente/cadastrar-cliente.component';
import { CadastrarVeiculoComponent } from './cadastros/cadastrar-veiculo/cadastrar-veiculo.component';
import { InfogeraisComponent } from './infogerais/infogerais.component';


const routes: Routes = [
  { path: '', redirectTo: 'entrar', pathMatch: 'full' },

  { path: 'entrar', component: EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent },

  { path: 'inicio', component: InicioComponent},

  { path: 'cadastrarcliente', component: CadastrarClienteComponent},
  { path: 'cadastrarveiculo', component: CadastrarVeiculoComponent},

  { path: 'infogerais/:id', component: InfogeraisComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
