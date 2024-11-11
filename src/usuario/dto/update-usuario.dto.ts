import { ApiProperty } from "@nestjs/swagger";

export class UpdateUsuarioDto {

  @ApiProperty({ description: 'Nombre del usuario', example: 'Juan Pérez' })
  nombre: string;

  @ApiProperty({ description: 'Correo electrónico del usuario', example: 'x@mail.com' })
  correo: string;

}
