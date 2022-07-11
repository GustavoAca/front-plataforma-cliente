import { Usuario } from './Usuario';
import { Veiculo } from './Veiculo';
export class Cliente{

  public id_cliente: number
  public nome: string
  public contato: string
  public usuario: Usuario
  public veiculo: Veiculo[]


}
