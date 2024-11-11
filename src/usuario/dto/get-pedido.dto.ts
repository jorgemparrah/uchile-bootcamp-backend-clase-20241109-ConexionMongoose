import { ApiProperty } from "@nestjs/swagger";

export class GetPedidoDto {

  @ApiProperty()
  id: string;
  @ApiProperty()
  usuarioId: string;
  @ApiProperty()
  fecha: string;
  @ApiProperty()
  estado: string;
  @ApiProperty()
  total: number;
  @ApiProperty()
  productos: any[];

}
