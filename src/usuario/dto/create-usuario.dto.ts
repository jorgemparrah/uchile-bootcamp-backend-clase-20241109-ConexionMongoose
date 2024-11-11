import { ApiProperty } from "@nestjs/swagger";

export class CreateUsuarioDto {

  @ApiProperty({ description: 'Identificador único del usuario', example: '1234567890' })
  id: string;

  @ApiProperty({ description: 'Nombre del usuario', example: 'Juan Pérez' })
  nombre: string;

  @ApiProperty({ description: 'Correo electrónico del usuario', example: 'yo@mail.com' })
  correo: string;

  @ApiProperty({ description: 'Número de teléfono del usuario', example: '1234567890' })
  telefono: string;

  @ApiProperty({ description: 'Calle de la dirección del usuario', example: 'Calle 123' })
  calle: string;

  @ApiProperty({ description: 'Ciudad de la dirección del usuario', example: 'Ciudad de México' })
  ciudad: string;

  @ApiProperty({ description: 'Código postal de la dirección del usuario', example: '12345' })
  codigoPostal: string;

}
