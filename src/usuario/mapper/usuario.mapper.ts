import { Usuario } from "src/odm/schema/usuario.schema";
import { CreateUsuarioDto } from "../dto/create-usuario.dto";
import { GetUsuarioDto } from "../dto/get-usuario.dto";
import { PedidoMapper } from "./pedido.mapper";
import { Pedido } from "src/odm/schema/pedidos.schema";

export class UsuarioMapper {
    static dtoToSchema(dto: CreateUsuarioDto): Usuario {
        const schema = new Usuario();
        schema._id = dto.id;
        schema.nombre = dto.nombre;
        schema.correo = dto.correo;
        schema.telefono = dto.telefono
        schema.direccion = {
            calle: dto.calle,
            ciudad: dto.ciudad,
            codigoPostal: dto.codigoPostal
        }
        return schema;
    }

    static schemaToDto(schema: Usuario): GetUsuarioDto {
        const dto = new GetUsuarioDto();
        dto.id = schema._id;
        dto.nombre = schema.nombre;
        dto.correo = schema.correo;
        dto.telefono = schema.telefono;
        if (schema.direccion) {
          dto.calle = schema.direccion.calle;
          dto.ciudad = schema.direccion.ciudad;
          dto.codigoPostal = schema.direccion.codigoPostal;
        }
        dto.pedidos = []
        if (schema.pedidos.length > 0) {
          if (typeof(schema.pedidos[0]) === 'string') {
            dto.pedidos = schema.pedidos as string[];
          } else {
            dto.pedidos = PedidoMapper.schemaListToDtoList(schema.pedidos as Pedido[]);
          }
        }
        return dto;
    }

    static schemaListToDtoList(schema: Usuario[]): GetUsuarioDto[] {
        return schema.map((usuario) => UsuarioMapper.schemaToDto(usuario));
    }

}