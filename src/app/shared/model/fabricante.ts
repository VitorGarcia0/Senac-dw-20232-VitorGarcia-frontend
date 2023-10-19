import { Produto } from "./produto";

export class Fabricante {
  id: number;
  nome: string;
  cnpj: string;
  cep: string;
  ep: string;
  cidade: string;
  uf: string;
  produto: Array<Produto>;


}
