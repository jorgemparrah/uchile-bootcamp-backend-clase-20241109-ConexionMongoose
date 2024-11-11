import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ collection: "pedidos" })
export class Pedido {

    @Prop({ name: "_id" })
    _id: string;

    @Prop({ name: "usuarioId" })
    usuarioId: string;

    @Prop({ name: "fecha" })
    fecha: string;

    @Prop({ name: "estado" })
    estado: string;

    @Prop({ name: "total" })
    total: number;

    @Prop({ name: "productos", type: [Object]})
    productos: Object[];

}

export const PedidoSchema = SchemaFactory.createForClass(Pedido);
