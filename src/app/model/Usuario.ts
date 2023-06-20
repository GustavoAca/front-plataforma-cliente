import { Cliente } from './Cliente';

export class Usuario {
    public id: number
    public nome: string
    public usuario: string
    public senha: string
    public foto: string
    public cliente: Cliente[]
}
