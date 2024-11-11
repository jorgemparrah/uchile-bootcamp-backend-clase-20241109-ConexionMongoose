import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from 'src/odm/schema/usuario.schema';
import { UsuarioMapper } from './mapper/usuario.mapper';
import { GetUsuarioDto } from './dto/get-usuario.dto';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectModel(Usuario.name) private readonly usuarioModel: Model<Usuario>
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<GetUsuarioDto> {
    const usuario : Usuario = UsuarioMapper.dtoToSchema(createUsuarioDto);
    const usuarioGuardado : Usuario = await this.usuarioModel.create(usuario);
    console.log(usuarioGuardado);
    return UsuarioMapper.schemaToDto(usuarioGuardado);
  }

  async findAll(): Promise<GetUsuarioDto[]> {
    const resultado = await this.usuarioModel.find({
      "direccion.codigoPostal": {
        $in: ["54321", "67890"]
      }
    })
    //.populate("pedidos");
    return UsuarioMapper.schemaListToDtoList(resultado);
  }

  async todosPedidos(): Promise<any[]> {
    const resultado = await this.usuarioModel.aggregate([
      {
        $addFields: {
            cantidadPedidos: {
              $size: "$pedidos"
            }
          }
      },
      {
        $match:
          {
            cantidadPedidos: {
              $gt: 0
            }
          }
      },
      {
        $lookup:
          {
            from: "pedidos",
            localField: "pedidos",
            foreignField: "_id",
            as: "lista"
          }
      },
      {
        $project: {
          lista: 1
        }
      }
    ]);
    console.log(resultado);
    const reduccion = resultado.reduce((acumulador, valorActual) => {
      return acumulador.concat(valorActual.lista);
    }, []);
    return reduccion;
  }

  async findOne(id: string) {
    const resultado = await this.usuarioModel.findOne({
      _id: id
    });
    return UsuarioMapper.schemaToDto(resultado);
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) : Promise<GetUsuarioDto> {
    /*
    consulto stock
    consulto carrito
    try {
      ultimo paso = 0
      id = copio carrito a pedido
      ultimo paso = 1
      elimino carrito
      ultimo paso = 2
      reducir stock
    } catch (error) {
      if (ultimo paso) >= 2
        rollback carrito
      if (ultimo paso) >= 1
        rollback pedido id
    }
    */
    const resultadoAntes = await this.usuarioModel.findOneAndUpdate({
      _id: id
    }, {
      $set: {
        nombre: updateUsuarioDto.nombre,
        correo: updateUsuarioDto.correo
      }
    });
    return await this.findOne(id);
  }

  async remove(id: string): Promise<GetUsuarioDto> {
    const resultadoQuery = await this.usuarioModel.findOneAndDelete({
      _id: id
    });
    console.log(resultadoQuery);
    return UsuarioMapper.schemaToDto(resultadoQuery);
  }
}
