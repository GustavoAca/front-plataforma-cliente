import { Cliente } from "./Cliente"
import { TiposVeiculos } from './TiposVeiculos';

export class Veiculo {
  public id_veiculo: number
  public nome: string
  public placa: string
  public uber: string
  public vencimentoBoleto: string
  public mensalidade: string
  public tiposVeiculos: TiposVeiculos
  public cliente: Cliente

}
