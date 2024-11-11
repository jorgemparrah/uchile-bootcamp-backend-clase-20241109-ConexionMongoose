import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OdmModule } from './odm/odm.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [OdmModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
