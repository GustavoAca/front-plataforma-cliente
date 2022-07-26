import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastros/cadastrar/cadastrar.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { CadastrarClienteComponent } from './cadastros/cadastrar-cliente/cadastrar-cliente.component';
import { InfogeraisComponent } from './infogerais/infogerais.component';
import { CadastrarCarroClienteExistenteComponent } from './cadastros/cadastrar-carro-cliente-existente/cadastrar-carro-cliente-existente.component';
import { EditarClienteComponent } from './editar/editar-cliente/editar-cliente.component';
import { EditarVeiculoComponent } from './editar/editar-veiculo/editar-veiculo.component';


@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    CadastrarComponent,
    InicioComponent,
    HeaderComponent,
    CadastrarClienteComponent,
    InfogeraisComponent,
    CadastrarCarroClienteExistenteComponent,
    EditarClienteComponent,
    EditarVeiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [{
    //usado para usar o href na pagina e não ter chance de dar erro de rota
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
