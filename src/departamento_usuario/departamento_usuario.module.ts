import { Module } from '@nestjs/common';
import { DepartamentoUsuarioService } from './departamento_usuario.service';
import { DepartamentoUsuarioController } from './departamento_usuario.controller';

@Module({
  controllers: [DepartamentoUsuarioController],
  providers: [DepartamentoUsuarioService],
})
export class DepartamentoUsuarioModule {}
