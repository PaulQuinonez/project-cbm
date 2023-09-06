import { Module } from '@nestjs/common';
import { ProcesoDeterminadoService } from './proceso_determinado.service';
import { ProcesoDeterminadoController } from './proceso_determinado.controller';

@Module({
  controllers: [ProcesoDeterminadoController],
  providers: [ProcesoDeterminadoService],
})
export class ProcesoDeterminadoModule {}
