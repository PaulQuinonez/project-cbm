import { Module } from '@nestjs/common';
import { TipoFlujoProcesoService } from './tipo_flujo_proceso.service';
import { TipoFlujoProcesoController } from './tipo_flujo_proceso.controller';

@Module({
  controllers: [TipoFlujoProcesoController],
  providers: [TipoFlujoProcesoService],
})
export class TipoFlujoProcesoModule {}
