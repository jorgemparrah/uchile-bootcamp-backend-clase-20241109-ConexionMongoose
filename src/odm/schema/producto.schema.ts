import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { DetalleProducto } from "./detalle-producto.schema";

@Schema({ collection: "productos" })
export class Producto {

    @Prop({ name: "nombre" })
    nombre: string;

    @Prop({ name: "descripcion", type: String })
    descripcion: string;

    @Prop({ name: "categorias", type: [String] })
    categorias: string[];

    @Prop({ name: "precio" })
    precio: number;

    @Prop({ name: "detalles", type: DetalleProducto })
    detalles: DetalleProducto;

}
export const ProductoSchema = SchemaFactory.createForClass(Producto);
