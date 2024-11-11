import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, UsuarioSchema } from 'src/odm/schema/usuario.schema';
import { Pedido, PedidoSchema } from 'src/odm/schema/pedidos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Usuario.name, schema: UsuarioSchema
    },{
      name: Pedido.name, schema: PedidoSchema
    }])
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
