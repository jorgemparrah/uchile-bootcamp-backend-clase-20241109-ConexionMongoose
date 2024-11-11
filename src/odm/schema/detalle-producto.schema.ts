import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class DetalleProducto {

    @Prop({ name: "marca", required: true })
    marca: string;

    @Prop({ name: "modelo" })
    modelo: string;

    @Prop({ name: "stock", min: 0 })
    stock: number;

}
