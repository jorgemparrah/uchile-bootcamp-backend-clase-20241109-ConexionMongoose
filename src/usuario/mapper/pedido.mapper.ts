import { Pedido } from "src/odm/schema/pedidos.schema";
import { GetPedidoDto } from "../dto/get-pedido.dto";

export class PedidoMapper {

    static schemaToDto(schema: Pedido): GetPedidoDto {
        const dto = new GetPedidoDto();
        dto.id = schema._id;
        dto.usuarioId = schema.usuarioId;
        dto.fecha = schema.fecha;
        dto.estado = schema.estado;
        dto.total = schema.total;
        dto.productos = schema.productos;
        return dto;
    }

    static schemaListToDtoList(schema: Pedido[]): GetPedidoDto[] {
        return schema.map((s) => PedidoMapper.schemaToDto(s));
    }

}