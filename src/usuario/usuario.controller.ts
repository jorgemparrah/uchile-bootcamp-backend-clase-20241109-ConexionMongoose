import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { GetUsuarioDto } from './dto/get-usuario.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @ApiBody({ type: CreateUsuarioDto })
  @ApiResponse({ status: 201, type: GetUsuarioDto })
  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<GetUsuarioDto> {
    return await this.usuarioService.create(createUsuarioDto);
  }

  @Get("pedidos/all")
  async findPedidos(): Promise<any[]> {
    return await this.usuarioService.todosPedidos();
  }

  @Get()
  async findAll(): Promise<GetUsuarioDto[]> {
    return await this.usuarioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<GetUsuarioDto> {
    return  await this.usuarioService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto): Promise<GetUsuarioDto> {
    return await this.usuarioService.update(id, updateUsuarioDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) : Promise<GetUsuarioDto> {
    return await this.usuarioService.remove(id);
  }
}
