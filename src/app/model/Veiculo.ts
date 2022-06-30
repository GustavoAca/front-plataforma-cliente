import { Cliente } from "./Cliente"

export class Veiculo {
  public id_veiculo: number
  public nome: string
  public placa: string
  public uber: string
  public vencimento: string
  public mensalidade: string
  public cliente: Cliente[]

}
