import { GetPedidoDto } from "./get-pedido.dto";

export class GetUsuarioDto {

  id: string;
  nombre: string;
  correo: string;
  telefono: string;
  calle: string;
  ciudad: string;
  codigoPostal: string;
  pedidos: string[] | GetPedidoDto[];

}
